import { Title } from '@/lib/styles/styledComponents';
import { CheckBox } from '@/components/base';
import { FormWrapper } from './AuthMail';
import useChannelCheck from '@/hooks/agreement/useChannelCheck';
import { SurveyTemplate } from '@/components/domain/survey';
import { useMeetingNavigate } from '@/hooks/common/useMeetingNavigate';
import Path from '@/router/Path';
import { useMeetingSessionState } from '@/hooks/common';
import { CHANNEL_ITEMS } from '@/types/constants/channel';

const ChannelSurvey = () => {
  const meetingNavigate = useMeetingNavigate();
  const { initMeetingState, setMeetingData } = useMeetingSessionState();
  const { channelCheck: channel, onChangeCheck, isChecked } = useChannelCheck(false);

  const handleNextClick = () => {
    if (!channel) return;

    if (initMeetingState) {
      setMeetingData({ ...initMeetingState, channel });
    }

    meetingNavigate(Path.AgreementSurvey);
  };

  return (
    <SurveyTemplate
      disableNext={!isChecked}
      hasProgressBar={true}
      currStep={13}
      totalStep={14}
      handlePrevClick={() => meetingNavigate(Path.IsAbroadSurvey)}
      handleNextClick={handleNextClick}
    >
      <Title>
        외딴썸을 처음 알게 된 <br />
        경로를 알려주세요.
      </Title>
      <FormWrapper>
        {CHANNEL_ITEMS.map(({ text, name }) => (
          <CheckBox
            isMulti={false}
            key={text}
            text={text}
            checked={name === channel}
            onChange={onChangeCheck}
            name={name}
            impotrant={name === channel ? true : false}
          />
        ))}
      </FormWrapper>
    </SurveyTemplate>
  );
};

export default ChannelSurvey;
