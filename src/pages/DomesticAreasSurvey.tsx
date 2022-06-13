import { ChooseFourBox, SurveyTemplate } from '@/components/domain/survey';
import { ChooseFourBoxItemProps } from '@/components/domain/survey/ChooseFourBox';
import { Title } from '@/lib/styles/styledComponents';
import React, { useState } from 'react';
import styled from 'styled-components';
import { FormWrapper } from './AuthMail';

const DomesticAreasSurvey = () => {
  const [checkedMultiOption, setMultiCheckedOption] = useState<ChooseFourBoxItemProps[]>(ITEMS);
  return (
    <SurveyTemplate disableNext={true} currStep={3} totalStep={10}>
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
          items={ITEMS}
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

const ITEMS = [
  {
    id: 'ICN',
    text: '인천',
    name: 'domesticAreas ',
    checked: false,
  },
  {
    id: 'SNW',
    text: '서북',
    name: 'domesticAreas ',
    checked: false,
  },
  {
    id: 'SNE',
    text: '동북',
    name: 'domesticAreas ',
    checked: false,
  },
  {
    id: 'GN',
    text: '경기 북부',
    name: 'domesticAreas ',
    checked: false,
  },
  {
    id: 'INVISIVLE',
    text: '보이면 버그입니다.',
    name: 'domesticAreas ',
    checked: false,
  },
  {
    id: 'SSW',
    text: '서남',
    name: 'domesticAreas ',
    checked: false,
  },
  {
    id: 'SSE',
    text: '동남',
    name: 'domesticAreas ',
    checked: false,
  },

  {
    id: 'GS',
    text: '경기 남부',
    name: 'domesticAreas ',
    checked: false,
  },
];
export default DomesticAreasSurvey;
