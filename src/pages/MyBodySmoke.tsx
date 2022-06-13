import React, { useEffect, useState } from 'react';
import { ChooseFourBox, ChooseTwoBox, SurveyTemplate } from '@/components/domain/survey';
import Path from '@/router/Path';
import { useDatingNavigate } from '@/hooks/common/useMeetingNavigate';
import { ChooseFourBoxItemProps } from '@/components/domain/survey/ChooseFourBox';

const BODY_ITEMS = [
  {
    id: 'SKINNY',
    text: '마른 편',
    name: 'myBody',
    checked: false,
  },
  {
    id: 'SLIM',
    text: '슬림 탄탄',
    name: 'myBody',
    checked: false,
  },
  {
    id: 'MUSCULAR',
    text: '근육',
    name: 'myBody',
    checked: false,
  },
  {
    id: 'CHUBBY',
    text: '통통한',
    name: 'myBody',
    checked: false,
  },
] as const;
const SMOKE_ITEMS = [
  {
    id: 'true',
    text: '예',
    name: 'isSmoke',
  },
  {
    id: 'false',
    text: '아니오',
    name: 'isSmoke',
  },
];

const ids = BODY_ITEMS.map(({ id }) => id);
type BodyOption = typeof ids[number];
type SmokeOption = 'true' | 'false' | '';

const MyBodySmoke = () => {
  const meetingNavigate = useDatingNavigate();
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
      handlePrevClick={() => meetingNavigate(Path.MyMbtiHeight)}
      handleNextClick={() => meetingNavigate(Path.MyDateCount)}
    >
      <ChooseFourBox items={BODY_ITEMS as unknown as ChooseFourBoxItemProps[]} checkedOption={checkedOption} setCheckedOption={setCheckedOption}>
        본인의 체형을 선택해주세요
      </ChooseFourBox>
      <ChooseTwoBox selectedOption={isSmoke} onChangeOption={onChangeOption} items={SMOKE_ITEMS}>
        혹시 흡연자이신가요?
      </ChooseTwoBox>
    </SurveyTemplate>
  );
};

export default MyBodySmoke;
