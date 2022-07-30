import { ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button, Modal } from '@/components/base';
import { useLocation, useNavigate } from 'react-router-dom';
import { Title } from '@/lib/styles/styledComponents';
import CompleteButton from './buttons/CompleteButton';
import EndButton from './buttons/EndButton';
import NoneButton from './buttons/NoneButton';
import SuccessButton from './buttons/SuccessButton';
import Path from '@/router/Path';
import { Status } from '@/pages/MatchingPage';
import { getMeetingMatching, postMeetingMatching } from '@/lib/api/meeting';
import { getDatingMatching, postDatingMatching } from '@/lib/api/dating';
import { useToggle } from '@/hooks/common';
import { MeetingPartnerSurvey } from '@/types/meeting';
import { DatingPartnerSurvey } from '@/types/dating';

interface MatchingTemplateProps {
  meeting: (matchingResult: MeetingPartnerSurvey) => ReactNode;
  dating: (matchingResult: DatingPartnerSurvey) => ReactNode;
  title: ReactNode;
  btnName: string;
  handleStatus: (status: Status) => void;
}

const initMeetingSurvey: MeetingPartnerSurvey = {
  areas: [],
  averageAge: 0,
  averageHeight: 0,
  departments: [],
  kakaoId: '',
  mindset: '',
  play: '',
  universities: '',
  payDeadline: '',
};

const initDatingSurvey: DatingPartnerSurvey = {
  age: 0,
  areas: [],
  body: '',
  characteristic: '',
  dateCount: '',
  department: '',
  height: 0,
  isSmoke: false,
  kakaoId: '',
  university: '',
  payDeadline: '',
};

const MatchingTemplete = ({ meeting, dating, btnName, title, handleStatus }: MatchingTemplateProps) => {
  const location = useLocation();
  const [type, setType] = useState('meeting');
  const navigate = useNavigate();
  const [isErrorModal, onToggleErrorModal] = useToggle();
  const [errorMessage, setErrorMessage] = useState('');
  const [meetingMatchingResult, setMeetingMatchingResult] = useState<MeetingPartnerSurvey>(initMeetingSurvey);
  const [datingMatchingResult, setDatingMatchingResult] = useState<DatingPartnerSurvey>(initDatingSurvey);

  useEffect(() => {
    location.pathname.includes('meeting') ? setType('meeting') : setType('dating');
  }, [location.pathname]);

  const requestRandomMatching = async () => {
    try {
      type === 'meeting' ? await postMeetingMatching() : await postDatingMatching();
      await fetchMatchingResult();
    } catch (e) {
      setErrorMessage(() => (e as Error).message.toString());
      onToggleErrorModal();
    }
  };

  const fetchMatchingResult = async () => {
    try {
      const response = type === 'meeting' ? await getMeetingMatching() : await getDatingMatching();
      if (!response?.partnerSurvey) {
        setErrorMessage(() => response.message.toString());
        onToggleErrorModal();
      } else {
        handleStatus('success');
        type === 'meeting'
          ? setMeetingMatchingResult(response.partnerSurvey as MeetingPartnerSurvey)
          : setDatingMatchingResult(response.partnerSurvey as DatingPartnerSurvey);
      }
    } catch (e) {
      setErrorMessage(() => (e as Error).message.toString());
      onToggleErrorModal();
    }
  };

  return (
    <>
      <TemplateBlock>
        <Title>{title}</Title>
        <ButtonWrapper>
          <TypeButton
            onClick={() => navigate(Path.MatchingMeeting)}
            size="medium"
            variant={type === 'meeting' ? 'default' : 'gray'}
            fontWeight={type === 'dating' ? 700 : 400}
          >
            미팅
          </TypeButton>
          <TypeButton
            onClick={() => navigate(Path.MatchingDating)}
            size="medium"
            variant={type === 'dating' ? 'default' : 'gray'}
            fontWeight={type === 'dating' ? 700 : 400}
          >
            소개팅
          </TypeButton>
        </ButtonWrapper>
        {type === 'meeting' && <>{meeting(meetingMatchingResult)}</>}
        {type === 'dating' && <>{dating(datingMatchingResult)}</>}
        <NavigationWrapper>
          <ButtonWrapper>
            {
              {
                none: <NoneButton />,
                success: <SuccessButton />,
                pay: <CompleteButton />,
                end: <EndButton handleStatus={handleStatus} />,
                fail: <EndButton handleStatus={handleStatus} />,
              }[btnName]
            }
          </ButtonWrapper>
        </NavigationWrapper>
      </TemplateBlock>
      {isErrorModal && (
        <Modal
          width={200}
          height={140}
          bottonName="확인"
          title="알림"
          text={errorMessage}
          onToggleModal={onToggleErrorModal}
          onClick={() => {
            void 0;
          }}
        />
      )}
    </>
  );
};

const TemplateBlock = styled.section`
  position: relative;
  height: calc(100% - 56px);
  margin: 0 8px;
`;

const NavigationWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 38px;
`;
const ButtonWrapper = styled.div`
  display: flex;
`;
const TypeButton = styled(Button)`
  margin: 25px 4px 4px 4px;
  width: 80px;
  height: 38px;
`;

export default MatchingTemplete;
