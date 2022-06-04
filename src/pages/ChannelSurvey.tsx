import { Title } from '@/lib/styles/styledComponents';
import CheckBox from '@/components/base/CheckBox';
import { FormWrapper } from './AuthMail';
import useFoundPathCheck from '@/hooks/agreement/useFoundPathCheck';
import { SurveyTemplate } from '@/components/domain/survey';
import useMeetingNavigate from '@/hooks/common/useMeetingNavigate';
import Path from '@/router/Path';

const ChannelSurvey = () => {
  const meetingNavigate = useMeetingNavigate();
  const { pathCheckList, onChangeCheck } = useFoundPathCheck();

  return (
    <SurveyTemplate
      disableNext={false}
      hasProgressBar={false}
      handlePrevClick={() => meetingNavigate(Path.AbroadAreasSurvey)}
      handleNextClick={() => meetingNavigate(Path.AgreementSurvey)}
    >
      <Title>
        외딴썸을 처음 알게 된 <br />
        경로를 알려주세요.
      </Title>
      <FormWrapper>
        {pathCheckList.map(({ text, checked, name }) => (
          <CheckBox key={text} text={text} checked={checked} onChange={onChangeCheck} name={name} impotrant={checked ? true : false} />
        ))}
      </FormWrapper>
    </SurveyTemplate>
  );
};

export default ChannelSurvey;
