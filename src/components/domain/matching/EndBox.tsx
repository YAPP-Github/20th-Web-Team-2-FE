import { palette } from '@/lib/styles/palette';
import { Meeting } from '@/types/meeting';
import React from 'react';
import styled from 'styled-components';

const TempData: Meeting = {
  averageHeight: [170, 175],
  averageAge: 22,
  ourUniversities: [1, 2],
  ourDepartments: ['ATHLETIC', 'SCIENCE'],
  abroadAreas: [1, 2, 3],
  domesticAreas: [],
  mindset: 'ALL',
  play: 'ALL',
  typeOfMeeting: 'ONE',
  gender: 'FEMALE',
  avoidUniversities: [],
  preferUniversities: [],
  preferAge: [],
  preferHeight: [],
  preferDepartments: [],
  isAbroad: false,
  channel: 'FRIEND',
  agreement: false,
  kakaoId: '',
};
function EndBox() {
  const { averageAge, averageHeight, mindset, ourDepartments, ourUniversities, play } = TempData;
  return (
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
        <InfoFlexText>
          {ourUniversities.map((univ) => (
            <div key={univ}>{univ},</div>
          ))}
        </InfoFlexText>
      </FlexLine>
      <FlexLine>
        <InfoLabel>학과</InfoLabel>
        <InfoFlexText>
          {ourDepartments.map((department, index) => (
            <div key={`${department}_${index}`}>
              {index === 0 ? '' : ','}
              {{ LIBERAL: '문과', SCIENCE: '이과', ATHLETIC: '체육', ART: '예술' }[department]}
            </div>
          ))}
        </InfoFlexText>
      </FlexLine>
      <FlexLine>
        <InfoLabel>지역</InfoLabel>
        <InfoFlexText>
          {/* {TempData.abroadAreas.length !== 0
            ? TempData.abroadAreas.map((area) => <div key={area}>{area},</div>)
            : TempData.domesticAreas?.map((area) => (
                <div key={area}>
                  {{ ICN: '인천', SNW: '서북', SNE: '동북', SSW: '서남', SSE: '동서', GN: '경기 북부', GS: '경기 남부' }[TempData.domesticAreas]},
                </div>
              ))} */}
        </InfoFlexText>
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
  );
}
const MatchingInfoBox = styled.div`
  width: 100%;
  padding: 20px 20px 5px 20px;
  background-color: ${palette.grayLight};
  border-radius: 4px;
  font-size: 12px;
`;

const InfoLabel = styled.div`
  font-weight: 700;
  padding: 2px 17px 10px 6px;
  width: 70px;
  text-align: left;
`;

const InfoText = styled.div`
  font-weight: 400;
  padding-top: 2px;
`;
const InfoFlexText = styled(InfoText)`
  display: flex;
`;

const FlexLine = styled.div`
  display: flex;
  justify-content: left;
`;
export default EndBox;
