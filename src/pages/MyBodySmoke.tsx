import React, { useState } from 'react';
import { ChooseFourBox, ChooseTwoBox, SurveyTemplate } from '@/components/domain/survey';
import Path from '@/router/Path';
import { useDatingNavigate } from '@/hooks/common/useNavigate';
import { SMOKE_ITEMS } from '@/types/constants/smoke';
import { MYBODY_ITEMS } from '@/types/constants/body';
import { useDatingSessionState } from '@/hooks/common';
import { type Body } from '@/types/dating';
import styled from 'styled-components';
import { LAST_DATING_STEP } from '@/components/domain/survey/SurveyTemplate';
import useUpdateSurvey from '@/hooks/survey/useUpdateSurvey';
import { useNavigate } from 'react-router-dom';

const MyBodySmoke = () => {
  const datingNavigate = useDatingNavigate();
  const navigate = useNavigate();
  const { isUpdate, onUpdateDatingSurvey } = useUpdateSurvey();
  const { initDatingState, setDatingData } = useDatingSessionState();
  const [myBody, setMyBody] = useState<Body | string>(initDatingState.myBody);
  const [mySmoke, setMySmoke] = useState(initDatingState.mySmoke);

  const onChangeOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    setMySmoke(id === 'true' ? true : false);
  };

  const handleNextClick = () => {
    if (isUpdate) {
      onUpdateDatingSurvey({ ...initDatingState, myBody: myBody as Body, mySmoke });
      navigate(Path.MatchingDating);
    } else {
      if (initDatingState) {
        setDatingData({ ...initDatingState, myBody: myBody as Body, mySmoke });
      }
      datingNavigate(Path.MyDateCount);
    }
  };
  return (
    <SurveyTemplate
      disableNext={!myBody}
      hasProgressBar={true}
      totalStep={LAST_DATING_STEP}
      currStep={5}
      handlePrevClick={() => datingNavigate(Path.MyMbtiHeight)}
      handleNextClick={handleNextClick}
    >
      <ChooseFourBox items={MYBODY_ITEMS} checkedOption={myBody} setCheckedOption={setMyBody}>
        본인의 체형을 선택해주세요
      </ChooseFourBox>
      <BottomWrapper>
        <ChooseTwoBox selectedOption={mySmoke ? 'true' : 'false'} onChangeOption={onChangeOption} items={SMOKE_ITEMS}>
          혹시 흡연자이신가요?
        </ChooseTwoBox>
      </BottomWrapper>
    </SurveyTemplate>
  );
};

const BottomWrapper = styled.div`
  margin-top: 46px;
`;

export default MyBodySmoke;
