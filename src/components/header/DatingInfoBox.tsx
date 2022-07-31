import React, { useEffect, useState } from 'react';
import { Modal } from '@/components/base';
import { palette } from '@/lib/styles/palette';
import { addComma } from '@/utils/addComma';
import {
  conversionBody,
  conversionCharacter,
  conversionDateCount,
  conversionDepartment,
  conversionDomesticArea,
  conversionGender,
} from '@/utils/converson';
import styled from 'styled-components';
import { getDatingSurvey } from '@/lib/api/dating';
import { useDatingSessionState, useToggle } from '@/hooks/common';
import { Link } from 'react-router-dom';
import Path from '@/router/Path';

const DatingInfoBox = () => {
  const { initDatingState, setDatingData } = useDatingSessionState();
  const [isErrorModal, onToggleErrorModal] = useToggle();
  const [doSurvey, setDoSurvey] = useState(true);
  const {
    age,
    myDepartment,
    mbti,
    myHeight,
    myBody,
    myDateCount,
    mySmoke,
    characteristic,
    domesticAreas,
    gender,
    // 여까지 내정보
    preferAge,
    preferBodies,
    preferCharacteristics,
    preferDateCount,
    preferDepartments,
    preferHeight,
    isSmokeOk,
    isAbroad,
    abroadAreas,
    //여까지 선호 조건
  } = initDatingState;

  useEffect(() => {
    const getDatingData = async () => {
      try {
        const res = await getDatingSurvey();
        if (res) {
          setDatingData(res);
        }
      } catch (e) {
        if ((e as any).request.status === 400) {
          setDoSurvey(false);
          return;
        }
        if ((e as any).request.status === 500) {
          onToggleErrorModal();
          return;
        }
      }
    };

    getDatingData();
  }, []);

  //doSurvey 안됐으면 설문 안뜨게
  if (!doSurvey)
    return (
      <div>
        <GroupLabel>Me</GroupLabel>
        <InfoLabel>설문 진행 전</InfoLabel>
      </div>
    );

  return (
    <>
      <div>
        <GroupLabel>Me</GroupLabel>
        <InfoLabel>나의 정보</InfoLabel>
        <InfoBox>
          <InfoEle>
            <Link to={`/updating/dating/${Path.MyGenderAge}`}>{age}살</Link>
          </InfoEle>
          <InfoEle>
            <Link to={`/updating/dating/${Path.MyGenderAge}`}>{conversionGender(gender)}</Link>
          </InfoEle>
          <InfoEle>
            <Link to={`/updating/dating/${Path.MyDepartmentCharacter}`}>{conversionDepartment(myDepartment)}</Link>
          </InfoEle>
          <InfoEle>
            <Link to={`/updating/dating/${Path.MyMbtiHeight}`}>{mbti}</Link>
          </InfoEle>
          <InfoEle>
            <Link to={`/updating/dating/${Path.MyDateCount}`}>연애 횟수 : {conversionDateCount(myDateCount)}</Link>
          </InfoEle>
          <InfoEle>
            <Link to={`/updating/dating/${Path.MyMbtiHeight}`}>{myHeight}cm</Link>
          </InfoEle>
          <InfoEle>
            <Link to={`/updating/dating/${Path.MyBodySmoke}`}>{conversionBody(myBody)}</Link>
          </InfoEle>
          <InfoEle>
            <Link to={`/updating/dating/${Path.MyBodySmoke}`}>{mySmoke ? '흡연' : '비흡연'}</Link>
          </InfoEle>
          <InfoEle>
            <Link to={`/updating/dating/${Path.MyDepartmentCharacter}`}>{conversionCharacter(characteristic)}</Link>
          </InfoEle>
          <Link to={`/updating/dating/${Path.DomesticAreasSurvey}`}>
            <FlexEle>
              {domesticAreas?.map((area, index) => (
                <div key={area + domesticAreas}>
                  {addComma(index)}
                  {conversionDomesticArea(area)}
                </div>
              ))}
            </FlexEle>
          </Link>
          <InfoEle>
            <Link to={`/updating/dating/${Path.AbroadAreasSurvey}`}>해외 지역 :{abroadAreas.length === 0 ? '없음' : abroadAreas}</Link>
          </InfoEle>
          <InfoEle>
            <Link to={`/updating/dating/${Path.IsAbroadSurvey}`}>해외여부 : {isAbroad ? '예' : '아니요'}</Link>
          </InfoEle>
        </InfoBox>
        <InfoLabel>선호 조건</InfoLabel>
        <InfoBox>
          <InfoEle>
            <Link to={`/updating/dating/${Path.PreferAgeHeightSurvey}`}>
              {preferAge[0]}~{preferAge[1]}살
            </Link>
          </InfoEle>

          <Link to={`/updating/dating/${Path.PreferBodyDateCountSurvey}`}>
            <FlexEle>
              {preferBodies?.map((body, index) => (
                <div key={body + preferBodies}>
                  {addComma(index)}
                  {conversionBody(body)}
                </div>
              ))}
            </FlexEle>
          </Link>

          <Link to={`/updating/dating/${Path.PreferDepartmentCharacterSurvey}`}>
            <FlexEle>
              {preferCharacteristics?.map((charator, index) => (
                <div key={charator + preferCharacteristics}>
                  {addComma(index)}
                  {conversionCharacter(charator)}
                </div>
              ))}
            </FlexEle>
          </Link>
          <InfoEle>
            <Link to={`/updating/dating/${Path.PreferBodyDateCountSurvey}`}>{conversionDateCount(preferDateCount)}</Link>
          </InfoEle>

          <Link to={`/updating/dating/${Path.PreferDepartmentCharacterSurvey}`}>
            <FlexEle>
              {preferDepartments?.map((department, index) => (
                <div key={department + preferDepartments}>
                  {addComma(index)}
                  {conversionDepartment(department)}
                </div>
              ))}
            </FlexEle>
          </Link>

          <InfoEle>
            <Link to={`/updating/dating/${Path.PreferAgeHeightSurvey}`}>
              {preferHeight[0]}~{preferHeight[1]}cm
            </Link>
          </InfoEle>
          {/* <InfoEle><Link>{preferUniversities}</Link></InfoEle> */}
          <InfoEle>
            <Link to={`/updating/dating/${Path.MyDateCount}`}>흡연 : {isSmokeOk ? '괜찮아요' : '싫어요'}</Link>
          </InfoEle>
        </InfoBox>
      </div>
      {isErrorModal && (
        <Modal
          width={200}
          height={140}
          bottonName="확인"
          title="알림"
          text="에러가 발생했습니다😭 다시한번 시도해 주세요!"
          onToggleModal={onToggleErrorModal}
          onClick={() => {
            void 0;
          }}
        />
      )}
    </>
  );
};
export const InfoLabel = styled.div`
  font-size: 14px;
  font-weight: 700;
  padding: 4px 0;
`;

export const GroupLabel = styled(InfoLabel)`
  color: ${palette.primary};
  margin-top: 16px;
`;
export const InfoBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const InfoEle = styled.li`
  max-width: 150px;
  position: relative;
  display: inline-block;
  height: 23px;
  line-height: 14px;
  background-color: ${({ theme }) => theme.palette.grayLight};
  border-radius: 4px;
  padding: 4px 10px;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
`;

export const FlexEle = styled(InfoEle)`
  display: flex;
  flex-wrap: nowrap;
`;

export default DatingInfoBox;
{
  /* {ourUniversities.map((univ, index) => (
            <p key={univ}>
              {schools[univ].name}
              {addTailComma(ourUniversities.length, index)}
            </p>
          ))} */
}
