import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';
import { Button } from '@/components/base';
import ProgressBar, { ProgressBarProps } from '@/components/base/ProgressBar';

interface SurveyTemplateProps extends Partial<ProgressBarProps> {
  children: ReactNode;
  hasProgressBar?: boolean;
  disableNext: boolean;
}

const SurveyTemplate = ({ children, hasProgressBar = true, disableNext, currStep = 1, totalStep = 1 }: SurveyTemplateProps) => {
  return (
    <SurveyTemplateBlock>
      <HeaderWrapper>
        <Logo to="/">외딴썸</Logo>
      </HeaderWrapper>
      {children}
      <NavigationWrapper>
        {hasProgressBar && <ProgressBar currStep={currStep} totalStep={totalStep} />}
        <ButtonWrapper>
          <Button size="medium" variant="gray">
            이전
          </Button>
          <Button
            onClick={() => console.log('aa')}
            size="medium"
            disabled={disableNext}
            variant={disableNext ? 'gray' : 'default'}
            fontWeight={disableNext ? 400 : 700}
          >
            다음
          </Button>
        </ButtonWrapper>
      </NavigationWrapper>
    </SurveyTemplateBlock>
  );
};

const SurveyTemplateBlock = styled.div`
  position: relative;
  height: 100%;
`;

const HeaderWrapper = styled.header`
  height: 56px;
  padding: 20px 0;
  margin-bottom: 26px;
`;

const Logo = styled(Link)`
  font-family: SangjuGotgam, Pretendard Variable, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
    'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 125%;
  text-align: center;
  color: rgba(0, 0, 0, 0.8);
`;

const NavigationWrapper = styled.div`
  position: fixed;
  width: calc(100% - 32px);
  bottom: 38px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export default SurveyTemplate;
