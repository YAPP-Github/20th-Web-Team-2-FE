import React, { useEffect, useState } from 'react';
import { useDatingNavigate } from '@/hooks/common/useNavigate';
import { ChooseFourBox, ChooseTwoBox, SurveyTemplate } from '@/components/domain/survey';
import Path from '@/router/Path';
import { ChooseFourBoxItemProps } from '@/components/domain/survey/ChooseFourBox';
import { SMOKEOK_ITEMS } from '@/types/constants/smoke';
import { MY_DOUNT_ITEMS } from '@/types/constants/dcount';

const ids = MY_DOUNT_ITEMS.map(({ id }) => id);
type BodyOption = typeof ids[number];
type SmokeOption = 'true' | 'false' | '';

const MyDateCount = () => {
  const datingNavigate = useDatingNavigate();
  const [disableNext, setDisableNext] = useState(true);

  const [checkedOption, setCheckedOption] = useState<BodyOption | ''>('');
  const [isSmokeOk, setIsSmokeOk] = useState<SmokeOption>('');

  const onChangeOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    setIsSmokeOk(id as SmokeOption);
  };

  useEffect(() => {
    if (checkedOption === '' || isSmokeOk === '') return;
    setDisableNext(false);
  }, [checkedOption, isSmokeOk]);

  return (
    <SurveyTemplate
      disableNext={disableNext}
      hasProgressBar={true}
      totalStep={12}
      currStep={6}
      handlePrevClick={() => datingNavigate(Path.MyBodySmoke)}
      handleNextClick={() => datingNavigate(Path.AvoidUniversitiesSurvey)}
    >
      <ChooseFourBox items={MY_DOUNT_ITEMS as unknown as ChooseFourBoxItemProps[]} checkedOption={checkedOption} setCheckedOption={setCheckedOption}>
        본인의 연애 횟수를 선택해주세요.
      </ChooseFourBox>
      <ChooseTwoBox selectedOption={isSmokeOk} onChangeOption={onChangeOption} items={SMOKEOK_ITEMS}>
        상대가 흡연자여도 괜찮나요?
      </ChooseTwoBox>
    </SurveyTemplate>
  );
};

export default MyDateCount;
