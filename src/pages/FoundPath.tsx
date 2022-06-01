import { useState } from 'react';
import styled from 'styled-components';
import SurveyTemplate from '@/components/survey/SurveyTemplate';
import { Button } from '@/components/base';
import { Title } from '@/lib/styles/styledComponents';
import { palette } from '@/lib/styles/palette';
import CheckBox from '@/components/base/CheckBox';

const FoundPath = () => {
  const [cantMoveNext, setCantMoveNext] = useState(true);
  console.log(cantMoveNext);
  return (
    <SurveyTemplate disableNext={cantMoveNext} hasProgressBar={false}>
      <Title>
        외딴썸을 처음 알게 된 <br />
        경로를 알려주세요.
      </Title>
      <FormWrapper>
        <CheckBox text="페이스북" />
        <CheckBox text="인스타그램" onChange={() => setCantMoveNext((prev) => !prev)} />
        <CheckBox text="카카오 단톡방" />
        <CheckBox text="카톡 플친" />
        <CheckBox text="지인추천" />
        <CheckBox text="기타 커뮤니티" />
      </FormWrapper>
    </SurveyTemplate>
  );
};

export const StyledButton = styled(Button)`
  margin-top: 16px;
`;

const FormWrapper = styled.div`
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
`;
export default FoundPath;
