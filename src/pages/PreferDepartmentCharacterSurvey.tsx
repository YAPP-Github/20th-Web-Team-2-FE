import React, { useState } from 'react';
import { ChooseFourBox, SurveyTemplate } from '@/components/domain/survey';
import { ChooseFourBoxItemProps } from '@/components/domain/survey/ChooseFourBox';
import { useDatingNavigate } from '@/hooks/common/useNavigate';
import Path from '@/router/Path';
import { PREFER_DEPARTMENT_ITEMS, DEPARTMENT_ITEM } from '@/types/constants/department';
import { PREFER_CHARACTER_ITEMS, CHARACTER_ITEM } from '@/types/constants/characteristic';
import { useDatingSessionState } from '@/hooks/common';
import { type Departments } from '@/types/meeting';
import { type Characteristic } from '@/types/dating';
import { LAST_DATING_STEP } from '@/components/domain/survey/SurveyTemplate';
import { useNavigate } from 'react-router-dom';
import useUpdateSurvey from '@/hooks/survey/useUpdateSurvey';

const PreferDepartmentCharacterSurvey = () => {
  const datingNavigate = useDatingNavigate();
  const navigate = useNavigate();
  const { isUpdate, onUpdateDatingSurvey } = useUpdateSurvey();
  const { initDatingState, setDatingData } = useDatingSessionState();

  // @Desc: string[] 값을 받아와서 기존 constants에 checked 속성을 끼워넣기
  const getInitItems = (items: DEPARTMENT_ITEM[] | CHARACTER_ITEM[], isDepartments: boolean) =>
    items.map((item) =>
      isDepartments
        ? { ...item, checked: initDatingState.preferDepartments.some((initState) => initState === item.id) }
        : { ...item, checked: initDatingState.preferCharacteristics.some((initState) => initState === item.id) },
    );
  const initDepartments = getInitItems(PREFER_DEPARTMENT_ITEMS, true) as DEPARTMENT_ITEM[];
  const initCharacteristics = getInitItems(PREFER_CHARACTER_ITEMS, false) as CHARACTER_ITEM[];
  const [preferDepartments, setPreferDepartments] = useState<ChooseFourBoxItemProps[]>(initDepartments);
  const [preferCharacteristics, setPreferCharacteristics] = useState<ChooseFourBoxItemProps[]>(initCharacteristics);

  // @Desc: 기존 constants에 checked 속성의 아이템 리스트들을 string[] 형태로 바꿔주기
  const savedPreferDepartments = preferDepartments.reduce<Departments[]>((prev, cur) => {
    if (cur.checked) {
      prev.push(cur.id as Departments);
    }
    return prev;
  }, []);
  const savedPreferCharacteristics = preferCharacteristics.reduce<Characteristic[]>((prev, cur) => {
    if (cur.checked) {
      prev.push(cur.id as Characteristic);
    }
    return prev;
  }, []);

  const handleNextClick = () => {
    if (isUpdate) {
      onUpdateDatingSurvey({ ...initDatingState, preferDepartments: savedPreferDepartments, preferCharacteristics: savedPreferCharacteristics });
      navigate(Path.MatchingDating);
    } else {
      if (initDatingState) {
        setDatingData({ ...initDatingState, preferDepartments: savedPreferDepartments, preferCharacteristics: savedPreferCharacteristics });
      }
      datingNavigate(Path.PreferBodyDateCountSurvey);
    }
  };

  return (
    <SurveyTemplate
      disableNext={!preferDepartments || !preferCharacteristics}
      currStep={10}
      totalStep={LAST_DATING_STEP}
      handlePrevClick={() => datingNavigate(Path.PreferAgeHeightSurvey)}
      handleNextClick={handleNextClick}
    >
      <ChooseFourBox
        isMulti
        items={PREFER_DEPARTMENT_ITEMS}
        checkedMultiOption={preferDepartments}
        setMultiCheckedOption={setPreferDepartments}
        top={31}
      >
        선호하는 학과를 모두 알려주세요.
      </ChooseFourBox>
      <ChooseFourBox
        isMulti
        items={PREFER_DEPARTMENT_ITEMS}
        checkedMultiOption={preferCharacteristics}
        setMultiCheckedOption={setPreferCharacteristics}
        top={31}
      >
        선호하는 성격을 모두 알려주세요.
      </ChooseFourBox>
    </SurveyTemplate>
  );
};

export default PreferDepartmentCharacterSurvey;
