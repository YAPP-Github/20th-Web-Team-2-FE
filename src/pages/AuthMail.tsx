import SurveyTemplate from '@/components/survey/SurveyTemplate';
import { Button } from '@/components/base';
import { useState } from 'react';

const AuthMail = () => {
  const [canMoveNext, setCanMoveNext] = useState(true);

  return (
    <SurveyTemplate disableNext={canMoveNext} hasProgressBar={false}>
      <Button onClick={() => setCanMoveNext((prev) => !prev)}>클릭</Button>
    </SurveyTemplate>
  );
};

export default AuthMail;
