import CheckBox from '@/components/base/CheckBox';
import { SurveyTemplate } from '@/components/domain/survey';
import useAgreementCheck from '@/hooks/agreement/useAgreementCheck';
import { palette } from '@/lib/styles/palette';
import { Title } from '@/lib/styles/styledComponents';
import React from 'react';
import styled from 'styled-components';
import { FormWrapper } from './AuthMail';
import Path from '@/router/Path';
import { useMatch } from 'react-router-dom';
import { useDatingNavigate, useMeetingNavigate } from '@/hooks/common/useNavigate';
import { useMeetingSessionState, useDatingSessionState } from '@/hooks/common';

const AgreementSurvey = () => {
  const matchMeeting = useMatch('/meeting/*');
  const meetingNavigate = matchMeeting ? useMeetingNavigate() : useDatingNavigate();
  const { initMeetingState, setMeetingData } = useMeetingSessionState();
  const { initDatingState, setDatingData } = useDatingSessionState();
  const { checkedList, checkedChoiceList, onChangeCheck, onChangeChoiceCheck, onCheckAll, isEssentialChecked, isAllchecked } = useAgreementCheck();

  const handleNextClick = () => {
    if (initMeetingState) {
      matchMeeting
        ? setMeetingData({ ...initMeetingState, agreement: isAllchecked })
        : setDatingData({ ...initDatingState, agreement: isAllchecked });
    }

    meetingNavigate(Path.KakaoIdSurvey);
  };

  return (
    <SurveyTemplate
      disableNext={!isEssentialChecked}
      hasProgressBar={false}
      handlePrevClick={() => meetingNavigate(Path.ChannelSurvey)}
      handleNextClick={handleNextClick}
    >
      <Title>
        약관동의를 <br />
        진행해주세요.
      </Title>
      <FormWrapper>
        <CheckBox text="전체동의" impotrant checked={isAllchecked} onChange={onCheckAll} />
        <DivisionLineStyled />
        {checkedList.map(({ checked, name, text }) => (
          <CheckBox key={text} text={text} name={name} checked={checked} onChange={onChangeCheck} />
        ))}
        {checkedChoiceList.map(({ checked, name, text }) => (
          <CheckBox key={text} text={text} name={name} checked={checked} onChange={onChangeChoiceCheck} />
        ))}
      </FormWrapper>
    </SurveyTemplate>
  );
};

export const DivisionLineStyled = styled.div`
  border: 0.75px solid ${palette.grayLight};
`;

export default AgreementSurvey;
