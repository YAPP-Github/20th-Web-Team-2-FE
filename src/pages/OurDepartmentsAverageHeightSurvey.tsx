import React, { useState, useMemo } from 'react';
import { SurveyTemplate } from '@/components/domain/survey';
import { Title } from '@/lib/styles/styledComponents';
import { ChooseFourBox, HeightBox } from '@/components/domain/survey';
import { ChooseFourBoxItemProps } from '@/components/domain/survey/ChooseFourBox';
import { OUR_DEPARTMENT_ITEMS } from '@/types/constants/department';
import Path from '@/router/Path';
import { useMeetingNavigate } from '@/hooks/common/useNavigate';
import { useMeetingSessionState } from '@/hooks/common';
import { type Departments } from '@/types/meeting';
import useUpdateSurvey from '@/hooks/survey/useUpdateSurvey';
import { useNavigate } from 'react-router-dom';

const OurDepartmentsAverageHeightSurvey = () => {
  const meetingNavigate = useMeetingNavigate();
  const navigate = useNavigate();
  const { isUpdate, onUpdateMeetingSurvey } = useUpdateSurvey();
  const { initMeetingState, setMeetingData } = useMeetingSessionState();
  const getInitDepartments = OUR_DEPARTMENT_ITEMS.map((item) => {
    return { ...item, checked: initMeetingState.ourDepartments.some((initState) => initState === item.id) };
  });
  const initDepartments = useMemo(() => getInitDepartments, [OUR_DEPARTMENT_ITEMS, initMeetingState.ourDepartments]);
  const [checkedMultiOption, setMultiCheckedOption] = useState<ChooseFourBoxItemProps[]>(initDepartments);
  const getOurDepartments = checkedMultiOption.reduce<Departments[]>((prev, cur) => {
    if (cur.checked) {
      prev.push(cur.id as Departments);
    }
    return prev;
  }, []);
  const ourDepartments = useMemo(() => getOurDepartments, [checkedMultiOption]);
  const [heightOption, setHeightOption] = useState(initMeetingState.averageHeight);

  const handleNextClick = () => {
    if (isUpdate) {
      onUpdateMeetingSurvey({ ...initMeetingState, ourDepartments: ourDepartments ?? [], averageHeight: heightOption });
      navigate(Path.MatchingDating);
    } else {
      if (initMeetingState) {
        setMeetingData({ ...initMeetingState, ourDepartments: ourDepartments ?? [], averageHeight: heightOption });
      }
      meetingNavigate(Path.AvoidUniversitiesSurvey);
    }
  };

  return (
    <SurveyTemplate
      disableNext={!checkedMultiOption || !heightOption}
      currStep={4}
      totalStep={14}
      handlePrevClick={() => meetingNavigate(Path.OurUniversitiesSurvey)}
      handleNextClick={handleNextClick}
    >
      <Title>
        <strong>참여자의 학과</strong>를
        <br />
        모두 선택해주세요.
      </Title>
      <ChooseFourBox isMulti items={OUR_DEPARTMENT_ITEMS} checkedMultiOption={checkedMultiOption} setMultiCheckedOption={setMultiCheckedOption}>
        학과를 선택해주세요
      </ChooseFourBox>
      <HeightBox heightOption={heightOption} setHeightOption={setHeightOption}>
        평균 키를 알려주세요.
      </HeightBox>
    </SurveyTemplate>
  );
};

export default React.memo(OurDepartmentsAverageHeightSurvey);
