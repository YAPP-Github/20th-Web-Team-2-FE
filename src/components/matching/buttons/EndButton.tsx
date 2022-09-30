import { Button, Modal } from '@/components/base';
import { useToggle } from '@/hooks/common';
import { postReMatchMeetingSurvey } from '@/lib/api/meeting';
import { postReMatchDatingSurvey } from '@/lib/api/dating';
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Status } from '@/pages/MatchingPage';

interface EndButtonProps {
  handleStatus: (status: Status) => void;
}

function EndButton({ handleStatus }: EndButtonProps) {
  const location = useLocation();
  const [isModal, onToggleModal] = useToggle();
  const [isErrorModal, onToggleErrorModal] = useToggle();
  const [errorMessage, setErrorMessage] = useState('에러가 발생했습니다😭 다시한번 시도해 주세요!');
  const [isConfirm, setConfirm] = useState(false);

  const handleClick = async () => {
    onToggleModal();
  };

  const handleRematch = async () => {
    try {
      const matchMeeting = location.pathname.includes('meeting');
      matchMeeting ? await postReMatchMeetingSurvey() : await postReMatchDatingSurvey();
      handleStatus('waiting');
    } catch (e) {
      setErrorMessage((e as any).message);
      onToggleErrorModal();
    }
  };

  useEffect(() => {
    if (isConfirm) {
      handleRematch();
    }
  }, [isConfirm]);

  return (
    <>
      <Button onClick={handleClick} size="medium">
        다시 매칭하기
      </Button>
      {isModal && (
        <Modal
          width={200}
          height={140}
          bottonName="확인"
          title="다시 매칭하시겠습니까?"
          text="　이전 설문 내용을 토대로　　다시 매칭해드립니다"
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
