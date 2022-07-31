import React, { useState, useMemo } from 'react';
import { SurveyTemplate } from '@/components/domain/survey';
import { Title } from '@/lib/styles/styledComponents';
import { ChooseFourBox } from '@/components/domain/survey';
import { ChooseFourBoxItemProps } from '@/components/domain/survey/ChooseFourBox';
import { PREFER_DEPARTMENT_ITEMS } from '@/types/constants/department';
import { useMeetingNavigate } from '@/hooks/common/useNavigate';
import { useMeetingSessionState } from '@/hooks/common';
import Path from '@/router/Path';
import { type Departments } from '@/types/meeting';
import useUpdateSurvey from '@/hooks/survey/useUpdateSurvey';
import { useNavigate } from 'react-router-dom';
import { LAST_MEETING_STEP } from '@/components/domain/survey/SurveyTemplate';

const PreferDepartmentsSurvey = () => {
  const meetingNavigate = useMeetingNavigate();
  const navigate = useNavigate();
  const { isUpdate, onUpdateMeetingSurvey } = useUpdateSurvey();
  const { initMeetingState, setMeetingData } = useMeetingSessionState();
  const getInitDepartments = PREFER_DEPARTMENT_ITEMS.map((item) => {
    return { ...item, checked: initMeetingState.preferDepartments.some((initState) => initState === item.id) };
  });
  const initDepartments = useMemo(() => getInitDepartments, [PREFER_DEPARTMENT_ITEMS, initMeetingState.preferDepartments]);
  const [preferDepartments, setPreferDepartments] = useState<ChooseFourBoxItemProps[]>(initDepartments);
  const getPreferDepartments = preferDepartments.reduce<Departments[]>((prev, cur) => {
    if (cur.checked) {
      prev.push(cur.id as Departments);
    }
    return prev;
  }, []);
  const savedPreferDepartments = useMemo(() => getPreferDepartments, [preferDepartments]);

  const handleNextClick = () => {
    if (isUpdate) {
      onUpdateMeetingSurvey({ ...initMeetingState, preferDepartments: savedPreferDepartments ?? [] });
      navigate(Path.MatchingDating);
    } else {
      if (initMeetingState) {
        setMeetingData({ ...initMeetingState, preferDepartments: savedPreferDepartments ?? [] });
      }
      meetingNavigate(Path.MindsetSurvey);
    }
  };

  return (
    <SurveyTemplate
      disableNext={!preferDepartments}
      currStep={8}
      totalStep={LAST_MEETING_STEP}
      handlePrevClick={() => meetingNavigate(Path.PreferAgeHeightSurvey)}
      handleNextClick={handleNextClick}
    >
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
        checkedMultiOption={preferDepartments}
        setMultiCheckedOption={setPreferDepartments}
        top={97}
      >
        복수 선택이 가능합니다.
      </ChooseFourBox>
    </SurveyTemplate>
  );
};

export default PreferDepartmentsSurvey;
