import { Title } from '@/lib/styles/styledComponents';
import { CheckBox } from '@/components/base';
import { FormWrapper } from './AuthMail';
import useChannelCheck from '@/hooks/agreement/useChannelCheck';
import { SurveyTemplate } from '@/components/domain/survey';
import Path from '@/router/Path';
import { useMatch } from 'react-router-dom';
import { useDatingNavigate, useMeetingNavigate } from '@/hooks/common/useNavigate';
import { useMeetingSessionState, useDatingSessionState } from '@/hooks/common';
import { CHANNEL_ITEMS } from '@/types/constants/channel';
import { Channel } from '@/types/meeting';
import { LAST_MEETING_STEP, LAST_DATING_STEP } from '@/components/domain/survey/SurveyTemplate';

const ChannelSurvey = () => {
  const matchMeeting = useMatch('/meeting/*');
  const meetingNavigate = matchMeeting ? useMeetingNavigate() : useDatingNavigate();
  const { initMeetingState, setMeetingData } = useMeetingSessionState();
  const { initDatingState, setDatingData } = useDatingSessionState();
  const { channelCheck: channel, onChangeCheck, isChecked } = useChannelCheck(false, initMeetingState.channel);
  const {
    channelCheck: channelDating,
    onChangeCheck: onChangeCheckDating,
    isChecked: isCheckedDating,
  } = useChannelCheck(false, initDatingState.channel);

  const isSameChannel = (name: string) => (matchMeeting ? name === channel : name === channelDating);

  const handleNextClick = () => {
    if (!channel) return;

    if (initMeetingState) {
      matchMeeting ? setMeetingData({ ...initMeetingState, channel }) : setDatingData({ ...initDatingState, channel: channelDating as Channel });
    }

    meetingNavigate(Path.AgreementSurvey);
  };

  return (
    <SurveyTemplate
      disableNext={matchMeeting ? !isChecked : !isCheckedDating}
      hasProgressBar={true}
      currStep={matchMeeting ? 13 : 14}
      totalStep={matchMeeting ? LAST_MEETING_STEP : LAST_DATING_STEP}
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
            checked={isSameChannel(name)}
            onChange={matchMeeting ? onChangeCheck : onChangeCheckDating}
            name={name}
            impotrant={isSameChannel(name) ? true : false}
          />
        ))}
      </FormWrapper>
    </SurveyTemplate>
  );
};

export default ChannelSurvey;
