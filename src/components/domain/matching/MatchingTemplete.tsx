import { ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button, Modal } from '@/components/base';
import { useLocation, useNavigate } from 'react-router-dom';
import { Title } from '@/lib/styles/styledComponents';
import { CompleteButton, EndButton, NoneButton, SuccessButton, FemaleSuccessButton } from './buttons';
import Path from '@/router/Path';
import { Status } from '@/pages/MatchingPage';
import { getMeetingMatching } from '@/lib/api/meeting';
import { getDatingMatching } from '@/lib/api/dating';
import { useToggle } from '@/hooks/common';
import { MatchingResultResponse } from '@/types/meeting';

interface MatchingTemplateProps {
  meeting: (matchingResult: MatchingResultResponse) => ReactNode;
  dating: (matchingResult: MatchingResultResponse) => ReactNode;
  title: ReactNode;
  btnName: string;
  handleStatus: (status: Status) => void;
}

const initMeetingSurvey: MatchingResultResponse = {
  code: 7000,
  message: '',
  partnerSurvey: { areas: [], averageAge: 0, averageHeight: 0, departments: [], kakaoId: '', mindset: '', play: '', universities: '' },
  payDeadLine: '',
  payName: '',
};

const initDatingSurvey: MatchingResultResponse = {
  code: 7000,
  message: '',
  partnerSurvey: {
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
  },
  payDeadLine: '',
  payName: '',
};

const MatchingTemplete = ({ meeting, dating, btnName, title, handleStatus }: MatchingTemplateProps) => {
  const location = useLocation();
  const [type, setType] = useState('meeting');
  const navigate = useNavigate();
  const [isErrorModal, onToggleErrorModal] = useToggle();
  const [errorMessage, setErrorMessage] = useState('');
  const [meetingMatchingResult, setMeetingMatchingResult] = useState<MatchingResultResponse>(initMeetingSurvey);
  const [datingMatchingResult, setDatingMatchingResult] = useState<MatchingResultResponse>(initDatingSurvey);

  useEffect(() => {
    location.pathname.includes('meeting') ? setType('meeting') : setType('dating');
  }, [location.pathname]);

  // const requestRandomMatching = async () => {
  //   try {
  //     type === 'meeting' ? await postMeetingMatching() : await postDatingMatching();
  //     await fetchMatchingResult();
  //   } catch (e) {
  //     setErrorMessage(() => (e as Error).message.toString());
  //     onToggleErrorModal();
  //   }
  // };

  const fetchMatchingResult = async () => {
    try {
      const response = type === 'meeting' ? await getMeetingMatching() : await getDatingMatching();
      const { code } = response;
      switch (code) {
        case 7000:
          handleStatus('none');
          break;
        case 7001:
          handleStatus('waiting');
          break;
        case 7002:
          handleStatus('success');
          break;
        case 7003:
          handleStatus('femaleSuccess');
          break;
        case 7004:
          saveMatchingResult(response);
          handleStatus('end');
          break;
        case 7005:
          handleStatus('fail');
          break;
        case 7006:
          handleStatus('cancel');
      }
    } catch (e) {
      setErrorMessage(() => (e as any).response.data.message);
      onToggleErrorModal();
    }
  };

  const saveMatchingResult = (partnerSurvey: MatchingResultResponse) => {
    'age' in partnerSurvey ? setDatingMatchingResult(partnerSurvey) : setMeetingMatchingResult(partnerSurvey);
  };

  useEffect(() => {
    fetchMatchingResult();
  }, [type]);

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
                success: <SuccessButton payName={type === 'meeting' ? meetingMatchingResult.payName : datingMatchingResult.payName} />,
                femaleSuccess: <FemaleSuccessButton />,
                pay: <CompleteButton />,
                end: <EndButton handleStatus={handleStatus} />,
                fail: <EndButton handleStatus={handleStatus} />,
                cancel: <EndButton handleStatus={handleStatus} />,
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
