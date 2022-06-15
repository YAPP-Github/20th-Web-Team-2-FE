import React, { useState } from 'react';
import { SurveyTemplate } from '@/components/domain/survey';
import { Title } from '@/lib/styles/styledComponents';
import { ChooseFourBox } from '@/components/domain/survey';
import { ChooseFourBoxItemProps } from '@/components/domain/survey/ChooseFourBox';
import { PREFER_DEPARTMENT_ITEMS } from '@/types/constants/department';

const PreferDepartmentsSurvey = () => {
  const [checkedMultiOption, setMultiCheckedOption] = useState<ChooseFourBoxItemProps[]>(PREFER_DEPARTMENT_ITEMS);

  return (
    <SurveyTemplate disableNext={!checkedMultiOption} currStep={3} totalStep={10}>
      <Title>
        <strong>
          선호하는 학과를
          <br />
          모두 알려주세요.
        </strong>
      </Title>
      <ChooseFourBox
        isMulti
        items={PREFER_DEPARTMENT_ITEMS}
        checkedMultiOption={checkedMultiOption}
        setMultiCheckedOption={setMultiCheckedOption}
        top={97}
      >
        복수 선택이 가능합니다.
      </ChooseFourBox>
    </SurveyTemplate>
  );
};

export default PreferDepartmentsSurvey;
