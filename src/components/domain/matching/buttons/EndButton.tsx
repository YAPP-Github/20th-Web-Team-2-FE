import { Button, Modal } from '@/components/base';
import { useToggle } from '@/hooks/common';
import { postReMatchMettingSurvey } from '@/lib/api/meeting';
import { postReMatchDatingSurvey } from '@/lib/api/dating';
import { useMatch } from 'react-router-dom';
import React from 'react';

function EndButton() {
  const [isErrorModal, onToggleErrorModal] = useToggle();
  const matchMeeting = useMatch('/meeting/*');

  const handleClick = async () => {
    try {
      const res = matchMeeting ? await postReMatchMettingSurvey() : await postReMatchDatingSurvey();
    } catch (e) {
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
          text="에러가 발생했습니다😭 다시한번 시도해 주세요!"
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
