import { palette } from '@/lib/styles/palette';
import transitions from '@/lib/styles/transitions';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from '.';
import ModalPortal from './ModalPortal';

interface IModalInnerStyled {
  width: number;
  height: number;
}

interface IModalInnerProps extends IModalInnerStyled {
  isClose: boolean;
}

interface ModalTemplateProps extends IModalInnerStyled {
  title: string;
  text: string;
  /**
   * 확인 버튼의 이름, 취소 버튼은 이름 고정.
   */
  bottonName: string;
  onToggleModal: () => void;
  /**
   * 확인 버튼 누를시 실행할 함수
   */
  onClick: () => void;
}

function ModalTemplate({ width, height, title, text, bottonName, onToggleModal, onClick, ...rest }: ModalTemplateProps) {
  const [isClose, setIsClose] = useState(false);
  // modal 닫기전 시간 지연시켜 애니매이션 보게하기 위함
  const onCloseModal = () => {
    setIsClose(true);
  };
  useEffect(() => {
    if (isClose) {
      setTimeout(() => onToggleModal(), 150);
    }
  }, [isClose]);

  return (
    <ModalPortal>
      <ModalTemplateBlock onMouseDown={onToggleModal} {...rest}>
        <ModalInner width={width} height={height} onMouseDown={(e) => e.stopPropagation()} isClose={isClose}>
          <ModalTitle>{title}</ModalTitle>
          <ModalText>{text}</ModalText>
          <ModalBtnBox>
            <ModalButton variant="gray" onClick={onCloseModal}>
              취소
            </ModalButton>
            <ModalButton
              width={210}
              onClick={() => {
                onClick();
                onCloseModal();
              }}
            >
              {bottonName}
            </ModalButton>
          </ModalBtnBox>
        </ModalInner>
        <ModalBackground />
      </ModalTemplateBlock>
    </ModalPortal>
  );
}

const ModalTemplateBlock = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9999;
`;

const ModalInner = styled.div<IModalInnerProps>`
  display: flex;
  flex-direction: column;
  align-self: center;
  position: absolute;
  z-index: 9999;
  background-color: white;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: 4px;
  animation: ${({ isClose }) => (isClose ? transitions.popOut : transitions.popIn)} 0.2s ease-in-out;
`;

const ModalTitle = styled.div`
  font-size: 1.3rem;
  padding-top: 1.3rem;
  line-height: 1.7rem;
  text-align: center;
  font-weight: 600;
  color: #545454;
`;

const ModalText = styled.div`
  line-height: 1.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.125em;
  flex: 1 1 35%;
  color: #575757;
  text-align: center;
`;

const ModalBtnBox = styled.div`
  flex: 1 1 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
`;

const ModalButton = styled(Button)`
  margin: 5px 0 5px 5px;
`;

const ModalBackground = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  background-color: ${palette.grayDarker};
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0.4;
`;

export default ModalTemplate;
