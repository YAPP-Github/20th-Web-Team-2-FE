import React from 'react';
import { palette } from '@/lib/styles/palette';
import { schools } from '@/mock/schools';
import { Meeting } from '@/types/meeting';
import styled from 'styled-components';
import KakaoCopyBox from './KakaoCopyBox';
import addCommaFunction from '@/utils/addCommaFunction';
import { conversionMindset } from '@/utils/converson/conversionMindset';
import { conversionPlay } from '@/utils/converson/conversionPlay';
import { conversionDepartment } from '@/utils/converson/conversionDepartment';

const TempData: Meeting = {
  averageHeight: 175,
  averageAge: 22,
  ourUniversities: [1, 2, 11],
  ourDepartments: ['ATHLETIC', 'SCIENCE'],
  abroadAreas: [1, 2, 3],
  domesticAreas: [],
  mindset: 'ALL',
  play: 'ALL',
  typeOfMeeting: 'ONE',
  gender: 'FEMALE',
  avoidUniversities: [1, 2, 3, 4],
  preferUniversities: [5, 6, 7, 8],
  preferAge: [20, 25],
  preferHeight: [170, 180],
  preferDepartments: ['ATHLETIC', 'SCIENCE'],
  isAbroad: false,
  channel: 'FRIEND',
  agreement: false,
  kakaoId: 'asd321',
};
function EndBox() {
  const { kakaoId, averageAge, averageHeight, mindset, ourDepartments, ourUniversities, play } = TempData;
  const { addComma, addTailComma } = addCommaFunction();
  return (
    <div>
      <MatchingInfoBox>
        <FlexLine>
          <InfoLabel>평균나이</InfoLabel>
          <InfoText>{averageAge}</InfoText>
        </FlexLine>
        <FlexLine>
          <InfoLabel>평균키</InfoLabel>
          <InfoText>{averageHeight}</InfoText>
        </FlexLine>
        <FlexLine>
          <InfoLabel>학교</InfoLabel>
          <InfoText>
            {ourUniversities.map((univ, index) => (
              <p key={univ}>
                {schools[univ].name}
                {addTailComma(ourUniversities.length, index)}
              </p>
            ))}
          </InfoText>
        </FlexLine>
        <FlexLine>
          <InfoLabel>학과</InfoLabel>
          <InfoFlexText>
            {ourDepartments.map((department, index) => (
              <p key={`${department}_${index}`}>
                {addComma(index)}
                {conversionDepartment(department)}
              </p>
            ))}
          </InfoFlexText>
        </FlexLine>
        <FlexLine>
          <InfoLabel>지역</InfoLabel>
          <InfoFlexText>
            {TempData.abroadAreas &&
              TempData.abroadAreas.map((area, index) => (
                <div key={area}>
                  {addComma(index)}
                  {area}
                </div>
              ))}
          </InfoFlexText>
          {TempData.domesticAreas?.map((area, index) => (
            <InfoFlexText key={`${area}_${index}`}>
              {addComma(index)}
              {conversionPlay(area)},
            </InfoFlexText>
          ))}
        </FlexLine>
        <FlexLine>
          <InfoLabel>마인드셋</InfoLabel>
          <InfoText>{conversionMindset(mindset)}</InfoText>
        </FlexLine>
        <FlexLine>
          <InfoLabel>술게임</InfoLabel>
          <InfoText>{conversionPlay(play)}</InfoText>
        </FlexLine>
      </MatchingInfoBox>
      <KakaoCopyBox kakaoId={kakaoId} />
      <EtcBox>
        <EtcEle href="https://docs.google.com/forms/d/e/1FAIpQLSeSnI-tB9acPtCepl-FM8cCTF-uezGOJ5SjwFOdQ6DT92xjmQ/viewform" target="_blank">
          후기작성
        </EtcEle>
        |
        <EtcEle href="https://docs.google.com/forms/d/e/1FAIpQLSfTSBwk6bb0ywTBoHu4cZM1gV8DN0OjMB4jVFvdzbYDrjnJdg/viewform" target="_blank">
          신고하기
        </EtcEle>
      </EtcBox>
    </div>
  );
}
const MatchingInfoBox = styled.div`
  width: 100%;
  padding: 20px 0px 5px 20px;
  background-color: ${palette.grayLight};
  border-radius: 4px;
  font-size: 12px;
  margin-bottom: 8px;
`;

const InfoLabel = styled.div`
  font-weight: 700;
  padding: 2px 2px 10px 6px;
  min-width: 60px;
  text-align: left;
  line-height: 16px;
`;

const InfoText = styled.div`
  font-weight: 400;
  padding-top: 2px;
  line-height: 16px;
  text-align: left;
  padding: 2px 0 10px 6px;
`;
const InfoFlexText = styled(InfoText)`
  display: flex;
`;

const FlexLine = styled.div`
  display: flex;
  justify-content: left;
`;
const EtcBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${palette.explanationColor};
`;
const EtcEle = styled.a`
  font-size: 12px;
  display: flex;
  width: 100%;
  height: 28px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export default React.memo(EndBox);
