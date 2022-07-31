import { Button, Input, Modal } from '@/components/base';
import { SurveyTemplate } from '@/components/domain/survey';
import useToggle from '@/hooks/common/useToggle';
import { palette } from '@/lib/styles/palette';
import { Title } from '@/lib/styles/styledComponents';
import React, { useState } from 'react';
import styled from 'styled-components';
import { FormWrapper } from './AuthMail';
import Path from '@/router/Path';
import { useMatch, useNavigate } from 'react-router-dom';
import { useDatingNavigate, useMeetingNavigate } from '@/hooks/common/useNavigate';
import { useMeetingSessionState, useDatingSessionState } from '@/hooks/common';
import { postMeetingSurvey } from '@/lib/api/meeting';
import { postDatingSurvey } from '@/lib/api/dating';
import { LAST_MEETING_STEP, LAST_DATING_STEP } from '@/components/domain/survey/SurveyTemplate';

const KakaoIdSurvey = () => {
  const matchMeeting = useMatch('/meeting/*');
  const meetingNavigate = matchMeeting ? useMeetingNavigate() : useDatingNavigate();
  const { initMeetingState, setMeetingData } = useMeetingSessionState();
  const { initDatingState, setDatingData } = useDatingSessionState();
  const [isModal, onToggleModal] = useToggle();
  const [isErrorModal, onToggleErrorModal] = useToggle();
  const navigate = useNavigate();
  const [kakaoId, setkakaoId] = useState(matchMeeting ? initMeetingState.kakaoId : initDatingState.kakaoId);
  const [isConfirm, setConfirm] = useState(false);

  const handleNextClick = async () => {
    try {
      if (matchMeeting) {
        const meetingData = { ...initMeetingState, kakaoId };
        const res = await postMeetingSurvey(meetingData);
        if (res.status === 200) {
          setMeetingData(meetingData);
        }
      } else {
        const datingData = { ...initDatingState, kakaoId };
        const res = await postDatingSurvey(datingData);
        if (res.status === 200) {
          setDatingData(datingData);
        }
      }
      navigate(Path.EndSurvey);
    } catch (e) {
      onToggleErrorModal();
    }
  };

  return (
    <>
      <SurveyTemplate
        disableNext={!isConfirm}
        hasProgressBar={true}
        currStep={matchMeeting ? 15 : 16}
        totalStep={matchMeeting ? LAST_MEETING_STEP : LAST_DATING_STEP}
        handlePrevClick={() => meetingNavigate(Path.AgreementSurvey)}
        handleNextClick={handleNextClick}
      >
        <Title>
          카톡 아이디를 <br />
          알려주세요.
        </Title>
        <SubTitle>
          매칭이 성사되면 10,000원 <br />
          결제후 상대방에게 전달됩니다.
        </SubTitle>
        <InputWrapper>
          <Input
            isFocus
            variant="filled"
            placeholder="카톡 아이디"
            value={kakaoId}
            height="48px"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setkakaoId(e.target.value);
            }}
          />
          <Explane>※'카톡 ID 검색 허용'으로 되어있어야 합니다.</Explane>
          <Button width={100} onClick={onToggleModal} disabled={!kakaoId}>
            카톡 ID 확인
          </Button>
        </InputWrapper>
      </SurveyTemplate>
      {isModal && (
        <Modal
          width={200}
          height={140}
          bottonName="확인"
          title={kakaoId}
          text="　카톡아이디를 확인해 주세요.　상대에게 보여질 아아디입니다!"
          onToggleModal={onToggleModal}
          onClick={() => setConfirm(true)}
        />
      )}
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

const SubTitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
  margin-top: 46px;
`;
const Explane = styled.p`
  margin: 16px 0 16px 0;
  font-size: 12px;
  color: ${palette.explanationColor};
`;
const InputWrapper = styled(FormWrapper)`
  margin-top: 46px;
`;

export default React.memo(KakaoIdSurvey);
