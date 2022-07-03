import { palette } from '@/lib/styles/palette';
import { Dating } from '@/types/dating';
import addCommaFunction from '@/utils/addCommaFunction';
import { conversionBody } from '@/utils/converson/conversionBody';
import { conversionCharacter } from '@/utils/converson/conversionCharacter';
import { conversionDateCount } from '@/utils/converson/conversionDateCount';
import { conversionDepartment } from '@/utils/converson/conversionDepartment';
import { conversionDomesticArea } from '@/utils/converson/conversionDomesticArea';
import { conversionGender } from '@/utils/converson/conversionGender';
import React from 'react';
import styled from 'styled-components';

interface DatingInfoProps {
  dating: Dating;
}
const DatingInfoBox = ({ dating }: DatingInfoProps) => {
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
  } = dating;
  const { addComma } = addCommaFunction();
  console.log(abroadAreas);
  return (
    <div>
      <GroupLabel>Me</GroupLabel>
      <InfoLabel>나의 정보</InfoLabel>
      <InfoBox>
        <InfoEle>{age}살</InfoEle>
        <InfoEle>{conversionGender(gender)}</InfoEle>
        <InfoEle>{conversionDepartment(myDepartment)}</InfoEle>
        <InfoEle>{mbti}</InfoEle>
        <InfoEle>연애 횟수 : {conversionDateCount(myDateCount)}</InfoEle>
        <InfoEle>{myHeight}cm</InfoEle>
        <InfoEle>{conversionBody(myBody)}</InfoEle>
        <InfoEle>{mySmoke ? '흡연' : '비흡연'}</InfoEle>
        <InfoEle>{conversionCharacter(characteristic)}</InfoEle>
        <FlexEle>
          {domesticAreas?.map((area, index) => (
            <div key={area + domesticAreas}>
              {addComma(index)}
              {conversionDomesticArea(area)}
            </div>
          ))}
        </FlexEle>
        <InfoEle>{abroadAreas.length === 0 ? '기피지역 : 없음' : abroadAreas}</InfoEle>
        <InfoEle>해외여부 : {isAbroad ? '예' : '아니요'}</InfoEle>
      </InfoBox>
      <InfoLabel>선호 조건</InfoLabel>
      <InfoBox>
        <InfoEle>
          {preferAge[0]}~{preferAge[1]}살
        </InfoEle>
        <FlexEle>
          {preferBodies?.map((body, index) => (
            <div key={body + preferBodies}>
              {addComma(index)}
              {conversionBody(body)}
            </div>
          ))}
        </FlexEle>
        <FlexEle>
          {preferCharacteristics?.map((charator, index) => (
            <div key={charator + preferCharacteristics}>
              {addComma(index)}
              {conversionCharacter(charator)}
            </div>
          ))}
        </FlexEle>
        <InfoEle>{conversionDateCount(preferDateCount)}</InfoEle>
        <FlexEle>
          {preferDepartments?.map((department, index) => (
            <div key={department + preferDepartments}>
              {addComma(index)}
              {conversionDepartment(department)}
            </div>
          ))}
        </FlexEle>
        <InfoEle>
          {preferHeight[0]}~{preferHeight[1]}cm
        </InfoEle>
        {/* <InfoEle>{preferUniversities}</InfoEle> */}
        <InfoEle>흡연 : {isSmokeOk ? '괜찮아요' : '싫어요'}</InfoEle>
      </InfoBox>
    </div>
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
  max-width: 200px;
  position: relative;
  height: 23px;
  line-height: 14px;
  background-color: ${({ theme }) => theme.palette.grayLight};
  border-radius: 4px;
  padding: 4px 10px;
  font-size: 12px;
  overflow-x: hidden;
  text-overflow: ellipsis;
`;

export const FlexEle = styled(InfoEle)`
  display: flex;
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
