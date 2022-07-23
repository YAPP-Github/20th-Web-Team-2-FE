import { Button } from '@/components/base';
import { Title } from '@/lib/styles/styledComponents';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { SurveyTemplate } from '@/components/domain/survey';
import { Logo } from '@/assets/img';

const EndSurvey = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <SurveyTemplate disableNext={false} hasProgressBar={false} disabledFooter>
      <Title>
        설문이 모두 끝났어요!
        <br />
        <strong>
          오늘 10시까지 이메일로
          <br />
          매칭결과를 알려드릴게요!
        </strong>
      </Title>
      <LogoIcon>
        <img src={Logo} alt="사이트 로고" />
      </LogoIcon>
      <ButtonFooter size="medium" onClick={handleClick}>
        홈으로 이동
      </ButtonFooter>
    </SurveyTemplate>
  );
};

const ButtonFooter = styled(Button)`
  position: absolute;
  bottom: 38px;
`;

const LogoIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  & > img {
    border-radius: 14px;
    width: 84px;
    height: 84px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  }
`;

export default EndSurvey;
