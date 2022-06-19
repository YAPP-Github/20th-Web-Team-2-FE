import React, { useEffect, useState } from 'react';
import { ChooseFourBox, ChooseTwoBox, SurveyTemplate } from '@/components/domain/survey';
import Path from '@/router/Path';
import { useDatingNavigate } from '@/hooks/common/useMeetingNavigate';
import { ChooseFourBoxItemProps } from '@/components/domain/survey/ChooseFourBox';
import { SMOKE_ITEMS } from '@/types/constants/smoke';
import { MYBODY_ITEMS } from '@/types/constants/body';

const ids = MYBODY_ITEMS.map(({ id }) => id);
type BodyOption = typeof ids[number];
type SmokeOption = 'true' | 'false' | '';

const MyBodySmoke = () => {
  const datingNavigate = useDatingNavigate();
  const [disableNext, setDisableNext] = useState(true);

  const [checkedOption, setCheckedOption] = useState<BodyOption | ''>('');
  const [isSmoke, setIsSmoke] = useState<SmokeOption>('');

  const onChangeOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    setIsSmoke(id as SmokeOption);
  };

  useEffect(() => {
    if (checkedOption === '' || isSmoke === '') return;
    setDisableNext(false);
  }, [checkedOption, isSmoke]);

  return (
    <SurveyTemplate
      disableNext={disableNext}
      hasProgressBar={true}
      totalStep={12}
      currStep={5}
      handlePrevClick={() => datingNavigate(Path.MyMbtiHeight)}
      handleNextClick={() => datingNavigate(Path.MyDateCount)}
    >
      <ChooseFourBox items={MYBODY_ITEMS as unknown as ChooseFourBoxItemProps[]} checkedOption={checkedOption} setCheckedOption={setCheckedOption}>
        본인의 체형을 선택해주세요
      </ChooseFourBox>
      <ChooseTwoBox selectedOption={isSmoke} onChangeOption={onChangeOption} items={SMOKE_ITEMS}>
        혹시 흡연자이신가요?
      </ChooseTwoBox>
    </SurveyTemplate>
  );
};

export default MyBodySmoke;
