import React, { useState, useMemo } from 'react';
import { ChooseFourBox, SurveyTemplate } from '@/components/domain/survey';
import { ChooseFourBoxItemProps } from '@/components/domain/survey/ChooseFourBox';
import { Title } from '@/lib/styles/styledComponents';
import { DOMESTICAREAS_ITEMS } from '@/types/constants/area';
import styled from 'styled-components';
import { FormWrapper } from './AuthMail';
import Path from '@/router/Path';
import { useMeetingNavigate, useDatingNavigate } from '@/hooks/common/useNavigate';
import { useMeetingSessionState, useDatingSessionState } from '@/hooks/common';
import { type DomesticAreas } from '@/types/meeting';
import { useMatch } from 'react-router-dom';

const DomesticAreasSurvey = () => {
  const matchMeeting = useMatch('/meeting/*');
  const meetingNavigate = matchMeeting ? useMeetingNavigate() : useDatingNavigate();
  const { initMeetingState, setMeetingData } = useMeetingSessionState();
  const { initDatingState, setDatingData } = useDatingSessionState();
  const getInitDomesticAreas = DOMESTICAREAS_ITEMS.map((item) => {
    return { ...item, checked: initMeetingState.domesticAreas.some((initState) => initState === item.id) };
  });
  const initDomesticAreas = useMemo(() => getInitDomesticAreas, [DOMESTICAREAS_ITEMS, initMeetingState]);
  const [checkedMultiOption, setMultiCheckedOption] = useState<ChooseFourBoxItemProps[]>(initDomesticAreas);
  const isChecked = useMemo(() => checkedMultiOption.some(({ checked }) => checked), [checkedMultiOption]);
  const getDomesticAreas = checkedMultiOption.reduce<DomesticAreas[]>((prev, cur) => {
    if (cur.checked) {
      prev.push(cur.id as DomesticAreas);
    }
    return prev;
  }, []);
  const domesticAreas = useMemo(() => getDomesticAreas, [checkedMultiOption]);

  const handleNextClick = () => {
    if (initMeetingState) {
      matchMeeting
        ? setMeetingData({ ...initMeetingState, domesticAreas: domesticAreas ?? [] })
        : setDatingData({ ...initDatingState, domesticAreas: domesticAreas ?? [] });
    }

    meetingNavigate(Path.ChannelSurvey);
  };

  return (
    <SurveyTemplate
      disableNext={!isChecked}
      currStep={matchMeeting ? 12 : 13}
      totalStep={matchMeeting ? 14 : 16}
      handlePrevClick={() => meetingNavigate(Path.IsAbroadSurvey)}
      handleNextClick={handleNextClick}
    >
      <Title>
        <strong>미팅이 가능한 지역</strong>을
        <br />
        모두 알려주세요.
      </Title>
      <BtnWrapper>
        <ChooseFourBox
          height={72}
          width={72}
          isMulti
          items={DOMESTICAREAS_ITEMS}
          checkedMultiOption={checkedMultiOption}
          setMultiCheckedOption={setMultiCheckedOption}
        >
          복수 선택이 가능합니다.
        </ChooseFourBox>
      </BtnWrapper>
    </SurveyTemplate>
  );
};

const BtnWrapper = styled(FormWrapper)`
  top: 30%;
`;

export default DomesticAreasSurvey;
