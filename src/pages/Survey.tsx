import styled from 'styled-components';
import { SurveyTemplate } from '@/components/domain/survey';
import { useState } from 'react';
// import { Button, SimpleRangeSlider } from '@/components/base';
// import MultiRangeSlider from '@/components/base/MultiRangeSlider';
// import SchoolSearch from '@/components/base/SchoolSearch';

const Survey = () => {
  const [canMoveNext, setCanMoveNext] = useState(true);

  return (
    <SurveyTemplate disableNext={canMoveNext} currStep={3} totalStep={10}>
      <Title>
        신원 확인을 위해 <br />
        학교 메일로 인증해주세요.
      </Title>
      {/* <SimpleRangeSlider min={20} max={35} /> */}
      {/* <Button onClick={() => setCanMoveNext((prev) => !prev)}>클릭</Button> */}
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
