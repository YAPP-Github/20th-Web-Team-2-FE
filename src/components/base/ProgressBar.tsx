import styled from 'styled-components';

interface ProgressBarProps {
  currStep: number;
  totalStep: number;
}

const ProgressBar = ({ currStep, totalStep }: ProgressBarProps) => {
  return (
    <NavigatorWrapper>
      <Navigation>
        <Progress currStep={currStep} totalStep={totalStep} />
      </Navigation>
    </NavigatorWrapper>
  );
};

const NavigatorWrapper = styled.section`
  position: relative;
  height: 89px;
  width: 100%;
  margin: 24px 0;
`;

const Navigation = styled.div`
  width: 100%;
  border: 6px solid ${({ theme }) => theme.palette.grayLight};
  border-radius: 20px;
`;

const Progress = styled.span<ProgressBarProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ currStep, totalStep }) =>
    `calc((100vw * ${currStep}) / ${totalStep})`};
  border: 6px solid ${({ theme }) => theme.palette.primary};
  border-radius: 20px;
  transition: all 0.5s ease-in-out;
`;

export default ProgressBar;
