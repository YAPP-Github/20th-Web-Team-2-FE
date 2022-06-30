import React, { useState } from 'react';
import { ChooseFourBox, ChooseTwoBox, SurveyTemplate } from '@/components/domain/survey';
import Path from '@/router/Path';
import { useDatingNavigate } from '@/hooks/common/useNavigate';
import { SMOKE_ITEMS } from '@/types/constants/smoke';
import { MYBODY_ITEMS } from '@/types/constants/body';
import { useDatingSessionState } from '@/hooks/common';
import { type Body } from '@/types/dating';

const MyBodySmoke = () => {
  const datingNavigate = useDatingNavigate();
  const { initDatingState, setDatingData } = useDatingSessionState();
  const [myBody, setMyBody] = useState<Body | string>(initDatingState.myBody);
  const [mySmoke, setMySmoke] = useState(initDatingState.mySmoke);

  const onChangeOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    setMySmoke(id === 'true' ? true : false);
  };

  const handleNextClick = () => {
    if (initDatingState) {
      setDatingData({ ...initDatingState, myBody: myBody as Body, mySmoke });
    }

    datingNavigate(Path.MyDateCount);
  };

  return (
    <SurveyTemplate
      disableNext={!myBody}
      hasProgressBar={true}
      totalStep={16}
      currStep={5}
      handlePrevClick={() => datingNavigate(Path.MyMbtiHeight)}
      handleNextClick={handleNextClick}
    >
      <ChooseFourBox items={MYBODY_ITEMS} checkedOption={myBody} setCheckedOption={setMyBody}>
        본인의 체형을 선택해주세요
      </ChooseFourBox>
      <ChooseTwoBox selectedOption={mySmoke ? 'true' : 'false'} onChangeOption={onChangeOption} items={SMOKE_ITEMS}>
        혹시 흡연자이신가요?
      </ChooseTwoBox>
    </SurveyTemplate>
  );
};

export default MyBodySmoke;
