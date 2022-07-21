import React, { ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from '@/components/base';
import { useLocation, useNavigate } from 'react-router-dom';
import { Title } from '@/lib/styles/styledComponents';
import CompleteButton from './buttons/CompleteButton';
import EndButton from './buttons/EndButton';
import NoneButton from './buttons/NoneButton';
import WaitingButton from './buttons/WaitingButton';
import SuccessButton from './buttons/SuccessButton';
import Path from '@/router/Path';
import { Status } from '@/pages/MatchingPage';

interface MatchingTemplateProps {
  children: ReactNode;
  title: ReactNode;
  btnName: string;
  handleStatus: (status: Status) => void;
}
const MatchingTemplete = ({ children, btnName, title, handleStatus }: MatchingTemplateProps) => {
  const location = useLocation();
  const [type, setType] = useState('meeting');
  const navigate = useNavigate();

  useEffect(() => {
    location.pathname.includes('meeting') ? setType('meeting') : setType('dating');
  }, [location.pathname]);

  return (
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
      <div>{children}</div>
      <NavigationWrapper>
        <ButtonWrapper>
          {
            {
              none: <NoneButton />,
              waiting: <WaitingButton />,
              success: <SuccessButton />,
              pay: <CompleteButton />,
              end: <EndButton handleStatus={handleStatus} />,
            }[btnName]
          }
        </ButtonWrapper>
      </NavigationWrapper>
    </TemplateBlock>
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
