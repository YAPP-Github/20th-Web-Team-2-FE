import React, { useEffect, useState } from 'react';
import { useDatingNavigate } from '@/hooks/common/useMeetingNavigate';
import { ChooseFourBox, ChooseTwoBox, SurveyTemplate } from '@/components/domain/survey';
import Path from '@/router/Path';
import { ChooseFourBoxItemProps } from '@/components/domain/survey/ChooseFourBox';

const DATE_COUNT_ITEMS = [
  {
    id: 'ZERO',
    text: '0회',
    name: 'myDateCount',
    checked: false,
  },
  {
    id: 'ONETWO',
    text: '1~2회',
    name: 'myDateCount',
    checked: false,
  },
  {
    id: 'THREEFOUR',
    text: '3~4회',
    name: 'myDateCount',
    checked: false,
  },
  {
    id: 'FIVE',
    text: '5회 이상',
    name: 'myDateCount',
    checked: false,
  },
] as const;
const SMOKE_ITEMS = [
  {
    id: 'true',
    text: '괜찮아요!',
    name: 'isSmokeOk',
  },
  {
    id: 'false',
    text: '비흡연자 선호',
    name: 'isSmokeOk',
  },
];

const ids = DATE_COUNT_ITEMS.map(({ id }) => id);
type BodyOption = typeof ids[number];
type SmokeOption = 'true' | 'false' | '';

const MyDateCount = () => {
  const meetingNavigate = useDatingNavigate();
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
      handlePrevClick={() => meetingNavigate(Path.MyBodySmoke)}
      handleNextClick={() => meetingNavigate(Path.AvoidUniversitiesSurvey)}
    >
      <ChooseFourBox
        items={DATE_COUNT_ITEMS as unknown as ChooseFourBoxItemProps[]}
        checkedOption={checkedOption}
        setCheckedOption={setCheckedOption}
      >
        본인의 연애 횟수를 선택해주세요.
      </ChooseFourBox>
      <ChooseTwoBox selectedOption={isSmokeOk} onChangeOption={onChangeOption} items={SMOKE_ITEMS}>
        상대가 흡연자여도 괜찮나요?
      </ChooseTwoBox>
    </SurveyTemplate>
  );
};

export default MyDateCount;
