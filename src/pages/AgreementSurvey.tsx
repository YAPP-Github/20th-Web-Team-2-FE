import CheckBox from '@/components/base/CheckBox';
import { SurveyTemplate } from '@/components/domain/survey';
import useAgreementCheck from '@/hooks/agreement/useAgreementCheck';
import { palette } from '@/lib/styles/palette';
import { Title } from '@/lib/styles/styledComponents';
import React from 'react';
import styled from 'styled-components';
import { FormWrapper } from './AuthMail';
import useMeetingNavigate from '@/hooks/common/useMeetingNavigate';
import Path from '@/router/Path';

const AgreementSurvey = () => {
  const meetingNavigate = useMeetingNavigate();
  const { checkedList, checkedChoiceList, onChangeCheck, onChangeChoiceCheck, onCheckAll, isAllchecked } = useAgreementCheck();
  return (
    <SurveyTemplate
      disableNext={!isAllchecked}
      hasProgressBar={false}
      handlePrevClick={() => meetingNavigate(Path.ChannelSurvey)}
      handleNextClick={() => meetingNavigate(Path.KakaoIdSurvey)}
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
