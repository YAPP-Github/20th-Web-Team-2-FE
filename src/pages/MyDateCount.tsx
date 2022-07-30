import React, { useState } from 'react';
import { useDatingNavigate } from '@/hooks/common/useNavigate';
import { ChooseFourBox, ChooseTwoBox, SurveyTemplate } from '@/components/domain/survey';
import Path from '@/router/Path';
import { MY_DOUNT_ITEMS } from '@/types/constants/dcount';
import { SMOKEOK_ITEMS } from '@/types/constants/smoke';
import { useDatingSessionState } from '@/hooks/common';
import { type DateCount } from '@/types/dating';
import styled from 'styled-components';
import { LAST_DATING_STEP } from '@/components/domain/survey/SurveyTemplate';

const MyDateCount = () => {
  const datingNavigate = useDatingNavigate();
  const { initDatingState, setDatingData } = useDatingSessionState();
  const [myDateCount, setMyDateCount] = useState<DateCount | string>(initDatingState.myDateCount);
  const [isSmokeOk, setIsSmokeOk] = useState(initDatingState.isSmokeOk);

  const onChangeOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    setIsSmokeOk(id === 'true' ? true : false);
  };

  const handleNextClick = () => {
    if (initDatingState) {
      setDatingData({ ...initDatingState, myDateCount: myDateCount as DateCount, isSmokeOk });
    }

    datingNavigate(Path.AvoidUniversitiesSurvey);
  };

  return (
    <SurveyTemplate
      disableNext={!myDateCount}
      hasProgressBar={true}
      totalStep={LAST_DATING_STEP}
      currStep={6}
      handlePrevClick={() => datingNavigate(Path.MyBodySmoke)}
      handleNextClick={handleNextClick}
    >
      <ChooseFourBox items={MY_DOUNT_ITEMS} checkedOption={myDateCount} setCheckedOption={setMyDateCount}>
        본인의 연애 횟수를 선택해주세요.
      </ChooseFourBox>
      <BottomWrapper>
        <ChooseTwoBox selectedOption={isSmokeOk ? 'true' : 'false'} onChangeOption={onChangeOption} items={SMOKEOK_ITEMS}>
          상대가 흡연자여도 괜찮나요?
        </ChooseTwoBox>
      </BottomWrapper>
    </SurveyTemplate>
  );
};

const BottomWrapper = styled.div`
  margin-top: 46px;
`;

export default MyDateCount;
