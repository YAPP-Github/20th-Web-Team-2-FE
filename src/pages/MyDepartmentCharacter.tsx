import React, { useState } from 'react';
import { SurveyTemplate } from '@/components/domain/survey';
import { Title } from '@/lib/styles/styledComponents';
import { ChooseFourBox } from '@/components/domain/survey';
import { MY_DEPARTMENT_ITEMS } from '@/types/constants/department';
import { CHARACTER_ITEMS } from '@/types/constants/characteristic';
import Path from '@/router/Path';
import { useDatingNavigate } from '@/hooks/common/useNavigate';
import { useDatingSessionState } from '@/hooks/common';
import { type Departments } from '@/types/meeting';
import { type Characteristic } from '@/types/dating';

const MyDepartmentCharacter = () => {
  const datingNavigate = useDatingNavigate();
  const { initDatingState, setDatingData } = useDatingSessionState();
  const [myDepartment, setMyDepartment] = useState<Departments | string>(initDatingState.myDepartment);
  const [characteristic, setCharacteristic] = useState<Characteristic | string>(initDatingState.characteristic);

  const handleNextClick = () => {
    if (initDatingState) {
      setDatingData({ ...initDatingState, myDepartment: myDepartment as Departments, characteristic: characteristic as Characteristic });
    }

    datingNavigate(Path.MyMbtiHeight);
  };

  return (
    <SurveyTemplate
      disableNext={!myDepartment && !characteristic}
      currStep={3}
      totalStep={12}
      handlePrevClick={() => datingNavigate(Path.MyGenderAge)}
      handleNextClick={handleNextClick}
    >
      <Title>
        <strong>본인에 대한 것</strong>을
        <br />
        선택해주세요.
      </Title>
      <ChooseFourBox top={34} items={MY_DEPARTMENT_ITEMS} checkedOption={myDepartment} setCheckedOption={setMyDepartment}>
        학과를 선택해주세요
      </ChooseFourBox>
      <ChooseFourBox top={31} items={CHARACTER_ITEMS} checkedOption={characteristic} setCheckedOption={setCharacteristic}>
        본인의 성격을 선택해주세요
      </ChooseFourBox>
    </SurveyTemplate>
  );
};

export default MyDepartmentCharacter;
