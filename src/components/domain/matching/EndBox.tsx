import React from 'react';
import { palette } from '@/lib/styles/palette';
import { schools } from '@/mock/schools';
import { Meeting } from '@/types/meeting';
import styled from 'styled-components';
import KakaoCopyBox from './KakaoCopyBox';
import AddCommaFunction from '@/hooks/common/AddCommaFunction';

const TempData: Meeting = {
  averageHeight: [170, 175],
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
  const { AddComma, AddTailComma } = AddCommaFunction();
  return (
    <div>
      <MatchingInfoBox>
        <FlexLine>
          <InfoLabel>평균나이</InfoLabel>
          <InfoText>{averageAge}</InfoText>
        </FlexLine>
        <FlexLine>
          <InfoLabel>평균키</InfoLabel>
          <InfoText>
            {averageHeight[0]} ~ {averageHeight[1]}
          </InfoText>
        </FlexLine>
        <FlexLine>
          <InfoLabel>학교</InfoLabel>
          <InfoText>
            {ourUniversities.map((univ, index) => (
              <p key={univ}>
                {schools[univ].name}
                {AddTailComma(ourUniversities.length, index)}
              </p>
            ))}
          </InfoText>
        </FlexLine>
        <FlexLine>
          <InfoLabel>학과</InfoLabel>
          <InfoFlexText>
            {ourDepartments.map((department, index) => (
              <p key={`${department}_${index}`}>
                {AddComma(index)}
                {{ LIBERAL: '문과', SCIENCE: '이과', ATHLETIC: '체육', ART: '예술' }[department]}
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
                  {AddComma(index)}
                  {area}
                </div>
              ))}
          </InfoFlexText>
          {TempData.domesticAreas?.map((area, index) => (
            <InfoFlexText key={`${area}_${index}`}>
              {AddComma(index)}
              {{ ICN: '인천', SNW: '서북', SNE: '동북', SSW: '서남', SSE: '동서', GN: '경기 북부', GS: '경기 남부' }[area]},
            </InfoFlexText>
          ))}
        </FlexLine>
        <FlexLine>
          <InfoLabel>마인드셋</InfoLabel>
          <InfoText>{{ ALL: '친구랑 노는, 설레는 둘 다', FRIEND: '친구랑 노는 느낌', LOVE: '설레는 느낌' }[mindset]}</InfoText>
        </FlexLine>
        <FlexLine>
          <InfoLabel>술게임</InfoLabel>
          <InfoText>{{ ALL: '술게임, 얘기하면서 둘 다', GAME: '술게임 할래요!', TALK: '얘기하면서 놀래요.' }[play]}</InfoText>
        </FlexLine>
      </MatchingInfoBox>
      <KakaoCopyBox kakaoId={kakaoId} />
      <EtcBox>
        <EtcEle
          onClick={() => {
            window.open('https://docs.google.com/forms/d/e/1FAIpQLSeSnI-tB9acPtCepl-FM8cCTF-uezGOJ5SjwFOdQ6DT92xjmQ/viewform', '_blank');
          }}
        >
          후기작성
        </EtcEle>
        |
        <EtcEle
          onClick={() => {
            window.open('https://docs.google.com/forms/d/e/1FAIpQLSfTSBwk6bb0ywTBoHu4cZM1gV8DN0OjMB4jVFvdzbYDrjnJdg/viewform', '_blank');
          }}
        >
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
const EtcEle = styled.div`
  font-size: 12px;
  display: flex;
  width: 100%;
  height: 28px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export default React.memo(EndBox);
