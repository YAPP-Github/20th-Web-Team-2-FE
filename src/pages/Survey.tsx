import styled from 'styled-components';
import SurveyTemplate from '@/components/survey/SurveyTemplate';
import { useState } from 'react';
import { Button } from '@/components/base';

const Survey = () => {
  const [canMoveNext, setCanMoveNext] = useState(true);

  return (
    <SurveyTemplate disableNext={canMoveNext}>
      <Title>
        신원 확인을 위해 <br />
        학교 메일로 인증해주세요.
      </Title>
      <Button onClick={() => setCanMoveNext((prev) => !prev)}>클릭</Button>
    </SurveyTemplate>
  );
};

const Title = styled.h1`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 0.9);
`;

export default Survey;
