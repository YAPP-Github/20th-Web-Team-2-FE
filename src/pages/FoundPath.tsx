import { useState } from 'react';
import styled from 'styled-components';
import { SurveyTemplate } from '@/components/domain/survey';
import { Button, CheckBox } from '@/components/base';
import { Title } from '@/lib/styles/styledComponents';
import { palette } from '@/lib/styles/palette';

const FoundPath = () => {
  const BTNS = ['페이스북', '인스타그램', '카카오단톡방', '카톡플친', '지인추천', '기타 커뮤니티'];
  const [cantMoveNext, setCantMoveNext] = useState(true);
  console.log(cantMoveNext);
  return (
    <SurveyTemplate disableNext={cantMoveNext} hasProgressBar={false}>
      <Title>
        외딴썸을 처음 알게 된 <br />
        경로를 알려주세요.
      </Title>
      <FormWrapper>
        {BTNS.map((btn) => (
          <CheckBox key={btn} text={btn} onChange={() => setCantMoveNext((prev) => !prev)} />
        ))}
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
