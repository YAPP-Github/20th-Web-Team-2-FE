import React, { MouseEventHandler, ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from '@/components/base';
import UserHeader from './UserHeader';
import { useLocation } from 'react-router-dom';
import { Title } from '@/lib/styles/styledComponents';
import CompleteButton from './buttons/CompleteButton';
import EndButton from './buttons/EndButton';
import NoneButton from './buttons/NoneButton';
import WaitingButton from './buttons/WaitingButton';
import SuccessButton from './buttons/SuccessButton';

interface MatchingTemplateProps {
  children: ReactNode;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  title: ReactNode;
  btnName: string;
}
const MatchingTemplete = ({ children, handleClick, btnName, title }: MatchingTemplateProps) => {
  const location = useLocation();
  const [type, setType] = useState('meeting');
  useEffect(() => {
    location.pathname.includes('meeting') ? setType('meeting') : setType('dating');
  }, [location.pathname]);

  return (
    <TemplateBlock>
      <UserHeader />
      <Title>{title}</Title>
      <ButtonWrapper>
        <TypeButton onClick={handleClick} size="medium" variant={type === 'meeting' ? 'default' : 'gray'} fontWeight={type === 'dating' ? 700 : 400}>
          미팅
        </TypeButton>
        <TypeButton onClick={handleClick} size="medium" variant={type === 'dating' ? 'default' : 'gray'} fontWeight={type === 'dating' ? 700 : 400}>
          소개팅
        </TypeButton>
      </ButtonWrapper>
      <div>{children}</div>
      <NavigationWrapper>
        <ButtonWrapper>
          {
            {
              none: <NoneButton />,
              waiting: <WaitingButton />,
              success: <SuccessButton />,
              pay: <CompleteButton />,
              end: <EndButton />,
            }[btnName]
          }
        </ButtonWrapper>
      </NavigationWrapper>
    </TemplateBlock>
  );
};

const TemplateBlock = styled.section`
  position: relative;
  height: 100%;
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
