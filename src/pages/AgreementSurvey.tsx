import CheckBox from '@/components/base/CheckBox';
import { SurveyTemplate } from '@/components/domain/survey';
import useAgreementCheck from '@/hooks/agreement/useAgreementCheck';
import { palette } from '@/lib/styles/palette';
import { Title } from '@/lib/styles/styledComponents';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FormWrapper } from './AuthMail';
import Path from '@/router/Path';
import { useLocation, useMatch } from 'react-router-dom';
import { useDatingNavigate, useMeetingNavigate } from '@/hooks/common/useNavigate';
import { useMeetingSessionState, useDatingSessionState } from '@/hooks/common';
import { goKakaoLogin } from '@/utils/goKakaoLogin';
import { getOauthKakaoAge } from '@/lib/api/oauth';

const AgreementSurvey = () => {
  const location = useLocation();
  const matchMeeting = useMatch('/meeting/*');
  const meetingNavigate = matchMeeting ? useMeetingNavigate() : useDatingNavigate();
  const { initMeetingState, setMeetingData } = useMeetingSessionState();
  const { initDatingState, setDatingData } = useDatingSessionState();
  const { checkedList, checkedChoiceList, onChangeCheck, onChangeChoiceCheck, onCheckAll, isEssentialChecked, isAllchecked } = useAgreementCheck();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get('code') ?? '';

    getOauthKakaoAge({ code })
      .then((response) => {
        console.log(response);
        meetingNavigate(Path.KakaoIdSurvey);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [location]);

  const handleNextClick = () => {
    if (initMeetingState) {
      matchMeeting
        ? setMeetingData({ ...initMeetingState, agreement: isAllchecked })
        : setDatingData({ ...initDatingState, agreement: isAllchecked });
    }

    goKakaoLogin('ADDITIONAL');
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
