import React, { MouseEventHandler, ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from '@/components/base';
import UserHeader from './UserHeader';
import { useLocation } from 'react-router-dom';
import { Title } from '@/lib/styles/styledComponents';

interface MatchingTemplateProps {
  children: ReactNode;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  IsDisable: boolean;
  title: ReactNode;
  btnName: string;
}
const MatchingTemplete = ({ children, handleClick, IsDisable, btnName, title }: MatchingTemplateProps) => {
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
          <Button
            onClick={handleClick}
            size="medium"
            disabled={IsDisable}
            variant={IsDisable ? 'gray' : 'default'}
            fontWeight={IsDisable ? 400 : 700}
          >
            {btnName}
          </Button>
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
