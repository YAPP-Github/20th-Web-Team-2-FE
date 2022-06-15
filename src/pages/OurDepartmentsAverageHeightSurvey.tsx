import React, { useState } from 'react';
import { SurveyTemplate } from '@/components/domain/survey';
import { Title } from '@/lib/styles/styledComponents';
import { ChooseFourBox, HeightBox } from '@/components/domain/survey';
import { ChooseFourBoxItemProps } from '@/components/domain/survey/ChooseFourBox';
import { MIN_HEIGHT, MAX_HEIGHT } from '@/components/domain/survey/HeightBox';
import { OUR_DEPARTMENT_ITEMS } from '@/types/constants/department';

const OurDepartmentsAverageHeightSurvey = () => {
  const [checkedMultiOption, setMultiCheckedOption] = useState<ChooseFourBoxItemProps[]>(OUR_DEPARTMENT_ITEMS);
  const [heightOption, setHeightOption] = useState(Math.floor((MIN_HEIGHT + MAX_HEIGHT) / 2));

  return (
    <SurveyTemplate disableNext={!checkedMultiOption && !heightOption} currStep={3} totalStep={10}>
      <Title>
        <strong>참여자의 학과</strong>를
        <br />
        모두 선택해주세요.
      </Title>
      <ChooseFourBox isMulti items={OUR_DEPARTMENT_ITEMS} checkedMultiOption={checkedMultiOption} setMultiCheckedOption={setMultiCheckedOption}>
        학과를 선택해주세요
      </ChooseFourBox>
      <HeightBox setHeightOption={setHeightOption}>평균 키를 알려주세요.</HeightBox>
    </SurveyTemplate>
  );
};

export default OurDepartmentsAverageHeightSurvey;
