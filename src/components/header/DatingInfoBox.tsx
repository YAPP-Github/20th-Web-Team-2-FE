import { palette } from '@/lib/styles/palette';
import { Dating } from '@/types/dating';
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
    abroadAreas,
    gender,
    // 여까지 내정보
    preferAge,
    preferBodies,
    preferCharacteristics,
    preferDateCount,
    preferDepartments,
    preferHeight,
    preferUniversities,
  } = dating;
  // const { addComma } = AddCommaFunction();
  return (
    <div>
      <GroupLabel>Me</GroupLabel>
      <InfoLabel>나의 정보</InfoLabel>
      <InfoBox>
        <InfoEle>{age}살</InfoEle>
        <InfoEle>{myDepartment}</InfoEle>
        <InfoEle>{mbti}</InfoEle>
        <InfoEle>{myDateCount}</InfoEle>
        <InfoEle>{myHeight}cm</InfoEle>
        <InfoEle>{myBody}</InfoEle>
        <InfoEle>{mySmoke ? '흡연' : '비흡연'}</InfoEle>
        <InfoEle>{characteristic}</InfoEle>
        {domesticAreas && <InfoEle>{domesticAreas}</InfoEle>}
        <InfoEle>{abroadAreas}</InfoEle>
        <InfoEle>{gender}</InfoEle>
      </InfoBox>
      <InfoLabel>선호 조건</InfoLabel>
      <InfoBox>
        <InfoEle>
          {preferAge[0]}~{preferAge[1]}살
        </InfoEle>
        <InfoEle>{preferBodies}</InfoEle>
        <InfoEle>{preferCharacteristics}</InfoEle>
        <InfoEle>{preferDateCount}</InfoEle>
        <InfoEle>{preferDepartments}</InfoEle>
        <InfoEle>
          {preferHeight[0]}~{preferHeight[1]}
        </InfoEle>
        <InfoEle>{preferUniversities}</InfoEle>
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

export default DatingInfoBox;
{
  /* {ourUniversities.map((univ, index) => (
            <p key={univ}>
              {schools[univ].name}
              {addTailComma(ourUniversities.length, index)}
            </p>
          ))} */
}
