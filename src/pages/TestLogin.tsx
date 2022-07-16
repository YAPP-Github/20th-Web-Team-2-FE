import styled from 'styled-components';
import { SurveyTemplate } from '@/components/domain/survey';
import { Button } from '@/components/base';
import { Title } from '@/lib/styles/styledComponents';
import { palette } from '@/lib/styles/palette';
import { LoginForm } from '@/components/testLogin';
import { LoginRequest } from '@/types/user';
import { postLogin } from '@/lib/api/login';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const TestLogin = () => {
  const navigate = useNavigate();
  const onSubmitAuthCode = async (values: LoginRequest) => {
    try {
      const response = await postLogin(values);

      if (response) {
        const { accessToken } = response;
        Cookies.set('AccessToken', accessToken);
      }
    } catch (e) {
      alert(e.message);
    }
  };

  const handleNextClick = () => {
    navigate('/type-of-meeting');
  };

  const handlePrevClick = () => {
    navigate('/');
  };

  return (
    <>
      <SurveyTemplate disableNext={false} hasProgressBar={false} handleNextClick={handleNextClick} handlePrevClick={handlePrevClick}>
        <Title>
          <strong>로그인해주세요.</strong>
        </Title>
        <Description>임시 로그인 계정: test1</Description>
        <FormWrapper>
          <LoginForm onSubmitAuthCode={onSubmitAuthCode} />
        </FormWrapper>
      </SurveyTemplate>
    </>
  );
};

const Description = styled.p`
  padding-top: 10px;
  font-weight: 300;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 0.6);
`;

export const StyledButton = styled(Button)`
  margin-top: 16px;
`;

export const FormWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 40%;
  transform: translateY(-50%);
  margin-top: 65px;
`;

export const InputsWrapper = styled.div`
  position: relative;
`;

export const ErrorMessage = styled.p`
  position: absolute;
  font-size: 12px;
  color: ${palette.warning};
  padding-top: 2px;
`;

export default TestLogin;
