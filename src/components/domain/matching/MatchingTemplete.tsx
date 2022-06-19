import React, { MouseEventHandler, ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from '@/components/base';
import UserHeader from './UserHeader';
import { useLocation } from 'react-router-dom';

interface MatchingTemplateProps {
  children: ReactNode;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  IsDisable: boolean;
}
const MatchingTemplete = ({ children, handleClick, IsDisable }: MatchingTemplateProps) => {
  const location = useLocation();
  const [type, setType] = useState('meeting');
  useEffect(() => {
    location.pathname.includes('meeting') ? setType('meeting') : setType('dating');
  }, [location]);

  return (
    <TemplateBlock>
      <UserHeader />
      {children}
      <ButtonWrapper>
        <TypeButton onClick={handleClick} size="medium" variant={type === 'meeting' ? 'default' : 'gray'} fontWeight={type === 'dating' ? 700 : 400}>
          미팅
        </TypeButton>
        <TypeButton onClick={handleClick} size="medium" variant={type === 'dating' ? 'default' : 'gray'} fontWeight={type === 'dating' ? 700 : 400}>
          소개팅
        </TypeButton>
      </ButtonWrapper>
      <NavigationWrapper>
        <ButtonWrapper>
          <Button
            onClick={handleClick}
            size="medium"
            disabled={IsDisable}
            variant={IsDisable ? 'gray' : 'default'}
            fontWeight={IsDisable ? 400 : 700}
          >
            다음
          </Button>
        </ButtonWrapper>
      </NavigationWrapper>
    </TemplateBlock>
  );
};
const TemplateBlock = styled.section`
  position: relative;
  height: 100%;
`;

const NavigationWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 38px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
`;
const TypeButton = styled(Button)`
  margin: 4px;
  width: 80px;
  height: 38px;
`;

export default MatchingTemplete;
