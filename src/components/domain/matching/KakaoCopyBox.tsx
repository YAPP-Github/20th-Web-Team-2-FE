import React from 'react';
import styled from 'styled-components';
import { CopyIcon } from '@/assets/img';
import { Modal } from '@/components/base';
import { useToggle } from '@/hooks/common';
import { palette } from '@/lib/styles/palette';

interface CopyBoxPorps {
  kakaoId: string;
}

function KakaoCopyBox({ kakaoId }: CopyBoxPorps) {
  const [isModal, onToggleModal] = useToggle();
  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      onToggleModal();
    } catch (error) {
      onToggleModal();
    }
  };
  return (
    <>
      <KakaoIdBox onClick={() => handleCopy(kakaoId)}>
        <img src={CopyIcon} alt="복사" />
        <KakaoLabel>상대 카톡아이디:</KakaoLabel>
        <b> {kakaoId}</b>
      </KakaoIdBox>
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
    </>
  );
}

const KakaoLabel = styled.p`
  margin: 0 4px;
`;
const MatchingInfoBox = styled.div`
  width: 100%;
  padding: 20px 0px 5px 20px;
  background-color: ${palette.grayLight};
  border-radius: 4px;
  font-size: 12px;
  margin: 8px 0;
`;
const KakaoIdBox = styled(MatchingInfoBox)`
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
`;

export default React.memo(KakaoCopyBox);
