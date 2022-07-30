import { Button, Modal } from '@/components/base';
import { useToggle } from '@/hooks/common';
import { postReMatchMeetingSurvey } from '@/lib/api/meeting';
import { postReMatchDatingSurvey } from '@/lib/api/dating';
import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import { Status } from '@/pages/MatchingPage';

interface EndButtonProps {
  handleStatus: (status: Status) => void;
}

function EndButton({ handleStatus }: EndButtonProps) {
  const location = useLocation();
  const [isErrorModal, onToggleErrorModal] = useToggle();
  const [errorMessage, setErrorMessage] = useState('에러가 발생했습니다😭 다시한번 시도해 주세요!');

  const handleClick = async () => {
    const matchMeeting = location.pathname.includes('meeting');
    try {
      matchMeeting ? await postReMatchMeetingSurvey() : await postReMatchDatingSurvey();
      handleStatus('waiting');
    } catch (e) {
      const { message } = e.response.data;
      setErrorMessage(message);
      onToggleErrorModal();
    }
  };
  return (
    <>
      <Button onClick={handleClick} size="medium">
        다시 매칭하기
      </Button>
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
}

export default EndButton;
