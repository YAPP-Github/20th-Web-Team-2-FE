import React, { useMemo, useState } from 'react';
import { ChooseFourBox, SurveyTemplate } from '@/components/domain/survey';
import { ChooseFourBoxItemProps } from '@/components/domain/survey/ChooseFourBox';
import { useDatingNavigate } from '@/hooks/common/useNavigate';
import Path from '@/router/Path';
import { PREFER_BODY_ITEMS } from '@/types/constants/body';
import { PREFER_DCOUNT_ITEMS } from '@/types/constants/dcount';
import { useDatingSessionState } from '@/hooks/common';
import { type DateCount, type Body } from '@/types/dating';
import { LAST_DATING_STEP } from '@/components/domain/survey/SurveyTemplate';

const PreferBodyDateCountSurvey = () => {
  const datingNavigate = useDatingNavigate();
  const { initDatingState, setDatingData } = useDatingSessionState();
  const [preferDateCount, setPreferDateCount] = useState<DateCount | string>(initDatingState.preferDateCount);

  // @Desc: string[] 값을 받아와서 기존 constants에 checked 속성을 끼워넣기
  const getInitPreferBodies = PREFER_BODY_ITEMS.map((item) => {
    return { ...item, checked: initDatingState.preferBodies.some((initState) => initState === item.id) };
  });
  const initBodies = useMemo(() => getInitPreferBodies, [PREFER_BODY_ITEMS, initDatingState.preferBodies]);
  const [preferBodies, setPreferBodies] = useState<ChooseFourBoxItemProps[]>(initBodies);
  // @Desc: 기존 constants에 checked 속성의 아이템 리스트들을 string[] 형태로 바꿔주기
  const savedPreferBodies = preferBodies.reduce<Body[]>((prev, cur) => {
    if (cur.checked) {
      prev.push(cur.id as Body);
    }
    return prev;
  }, []);

  const handleNextClick = () => {
    if (initDatingState) {
      setDatingData({ ...initDatingState, preferBodies: savedPreferBodies, preferDateCount: preferDateCount as DateCount });
    }

    datingNavigate(Path.IsAbroadSurvey);
  };

  return (
    <SurveyTemplate
      disableNext={!preferBodies && !preferDateCount}
      currStep={11}
      totalStep={LAST_DATING_STEP}
      handlePrevClick={() => datingNavigate(Path.PreferDepartmentCharacterSurvey)}
      handleNextClick={handleNextClick}
    >
      <ChooseFourBox isMulti items={PREFER_BODY_ITEMS} checkedMultiOption={preferBodies} setMultiCheckedOption={setPreferBodies} top={31}>
        선호하는 체형을 모두 선택해주세요.
      </ChooseFourBox>
      <ChooseFourBox items={PREFER_DCOUNT_ITEMS} checkedOption={preferDateCount} setCheckedOption={setPreferDateCount} top={45}>
        선호하는 상대방의 연애 횟수를 선택해주세요.
      </ChooseFourBox>
    </SurveyTemplate>
  );
};

export default PreferBodyDateCountSurvey;
