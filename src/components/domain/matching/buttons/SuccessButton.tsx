import React from 'react';
import { Button } from '@/components/base';
import { CopyWhiteIcon } from '@/assets/img';
import styled from 'styled-components';
import { Modal } from '@/components/base';
import { useToggle } from '@/hooks/common';

function SuccessButton() {
  const [isModal, onToggleModal] = useToggle();
  const [isErrorModal, onToggleErrorModal] = useToggle();

  const handleCopy = async (text: string) => {
    try {
      onToggleModal();
      await navigator.clipboard.writeText(text);
    } catch (e) {
      onToggleErrorModal();
    }
  };
  return (
    <SuccessButtonBlock>
      <Button onClick={() => handleCopy('농협 301-0312-2534-81')} size="medium">
        <img src={CopyWhiteIcon} alt="복사" width={17} height={17} /> <Text>농협 301-0312-2534-81</Text>
      </Button>
      <Warning>
        받는 분 통장 표시는 <span>카톡 아이디 첫 7자리</span>로 해주세요! <br />
        (ex: minsu30)
      </Warning>
      {isModal && (
        <Modal
          width={200}
          height={140}
          bottonName="확인"
          title="알림"
          text="복사완료!"
          onToggleModal={onToggleModal}
          onClick={() => {
            void 0;
          }}
        />
      )}
      {isErrorModal && (
        <Modal
          width={200}
          height={140}
          bottonName="확인"
          title="알림"
          text="복사중 에러가 발생했습니다😭 다시한번 시도해 주세요!"
          onToggleModal={onToggleErrorModal}
          onClick={() => {
            void 0;
          }}
        />
      )}
    </SuccessButtonBlock>
  );
}

const SuccessButtonBlock = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Text = styled.span`
  margin-left: 5px;
`;

const Warning = styled.strong`
  text-align: center;
  font-size: 12px;
  margin-top: 7px;
  line-height: 1.2;

  span {
    color: #ff0000;
  }
`;

export default SuccessButton;
