import { useState } from 'react';
import SurveyTemplate from '@/components/survey/SurveyTemplate';
import { Title } from '@/lib/styles/styledComponents';
import CheckBox from '@/components/base/CheckBox';
import { FormWrapper } from './AuthMail';

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

export default FoundPath;
