import { palette } from '@/lib/styles/palette';
import styled from 'styled-components';
import KakaoCopyBox from './KakaoCopyBox';
import { DatingPartnerSurvey } from '@/types/dating';
import { memo } from 'react';

function DatingEndBox({ age, areas, body, characteristic, dateCount, department, height, isSmoke, kakaoId, university }: DatingPartnerSurvey) {
  return (
    <div>
      <MatchingInfoBox>
        <FlexLine>
          <InfoLabel>나이</InfoLabel>
          <InfoText>{age}</InfoText>
        </FlexLine>
        <FlexLine>
          <InfoLabel>키</InfoLabel>
          <InfoText>{height}</InfoText>
        </FlexLine>
        <FlexLine>
          <InfoLabel>학교</InfoLabel>
          <InfoText>{university}</InfoText>
        </FlexLine>
        <FlexLine>
          <InfoLabel>학과</InfoLabel>
          <InfoFlexText>{department}</InfoFlexText>
        </FlexLine>
        <FlexLine>
          <InfoLabel>성격</InfoLabel>
          <InfoText>{characteristic}</InfoText>
        </FlexLine>
        <FlexLine>
          <InfoLabel>학과</InfoLabel>
          <InfoFlexText>{department}</InfoFlexText>
        </FlexLine>
        <FlexLine>
          <InfoLabel>지역</InfoLabel>
          <InfoText>{areas.join(',')}</InfoText>
        </FlexLine>
        <FlexLine>
          <InfoLabel>체형</InfoLabel>
          <InfoText>{body}</InfoText>
        </FlexLine>
        <FlexLine>
          <InfoLabel>흡연자 유무</InfoLabel>
          <InfoText>{isSmoke ? '네' : '아니오'}</InfoText>
        </FlexLine>
        <FlexLine>
          <InfoLabel>연애 횟수</InfoLabel>
          <InfoText>{dateCount}</InfoText>
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
  padding: 20px 0 5px 20px;
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
export default memo(DatingEndBox);
