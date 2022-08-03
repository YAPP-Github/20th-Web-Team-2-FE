import React, { useState } from 'react';
import styled from 'styled-components';
import { SubTitle } from '@/lib/styles/styledComponents';
import { SurveyTemplate, UnitSelector } from '@/components/domain/survey';
import { Input } from '@/components/base';
import { palette } from '@/lib/styles/palette';
import Path from '@/router/Path';
import { useDatingNavigate } from '@/hooks/common/useNavigate';
import { useDatingSessionState } from '@/hooks/common';
import { LAST_DATING_STEP } from '@/components/domain/survey/SurveyTemplate';
import { useNavigate } from 'react-router-dom';
import useUpdateSurvey from '@/hooks/survey/useUpdateSurvey';

const MyMbtiHeight = () => {
  const datingNavigate = useDatingNavigate();
  const navigate = useNavigate();
  const { initDatingState, setDatingData } = useDatingSessionState();
  const { isUpdate, onUpdateDatingSurvey } = useUpdateSurvey();
  const [mbti, setMbti] = useState(initDatingState.mbti);
  const [myHeight, setMyHeight] = useState(initDatingState.myHeight);
  const [heightError, setHeightError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'mbti':
        setMbti(value);
        break;
      case 'myHeight': {
        const heightValue = Number(value);
        if (heightValue <= 220) {
          setMyHeight(Number(value));
          setHeightError(false);
          return;
        }
        setHeightError(true);
      }
    }
  };

  const handleNextClick = () => {
    if (isUpdate) {
      onUpdateDatingSurvey({ ...initDatingState, mbti, myHeight });
      navigate(Path.MatchingDating);
    } else {
      if (initDatingState) {
        setDatingData({ ...initDatingState, mbti, myHeight });
      }

      datingNavigate(Path.MyBodySmoke);
    }
  };

  const mbtis = ['ISTJ', 'ISFJ', 'INFJ', 'INTJ', 'ISTP', 'ISFP', 'INFP', 'INTP', 'ESTP', 'ESFP', 'ENFP', 'ENTP', 'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ'];

  return (
    <SurveyTemplate
      disableNext={!mbti || !myHeight}
      currStep={4}
      totalStep={LAST_DATING_STEP}
      handlePrevClick={() => datingNavigate(Path.MyDepartmentCharacter)}
      handleNextClick={handleNextClick}
    >
      <StyledTitle>본인의 MBTI를 알려주세요.</StyledTitle>
      <Anchor target="_blank" href="https://www.16personalities.com/ko/%EB%AC%B4%EB%A3%8C-%EC%84%B1%EA%B2%A9-%EC%9C%A0%ED%98%95-%EA%B2%80%EC%82%AC">
        나의 MBTI 알아보기
      </Anchor>
      <UnitSelector placeholder="MBTI를 검색하세요." searchData={mbtis} selectedResult={mbti} setSelectedResult={setMbti} />
      <InputWrapper>
        <StyledTitle>본인의 키를 알려주세요.</StyledTitle>
        <HeightError>{heightError && '키는 220cm 이하여야 합니다.'}</HeightError>
        <Input
          required
          variant="filled"
          height="48px"
          name="myHeight"
          placeholder="키(cm)"
          maxLength={3}
          onChange={handleChange}
          value={!myHeight ? '' : String(myHeight)}
        />
      </InputWrapper>
    </SurveyTemplate>
  );
};

const StyledTitle = styled(SubTitle)`
  padding-bottom: 10px;
`;

const Anchor = styled.a`
  display: block;
  font-size: 14px;
  text-decoration: underline;
  color: ${palette.primary};
  margin-bottom: 30px;
`;

const InputWrapper = styled.div`
  margin-top: 63px;
`;

const HeightError = styled.p`
  font-size: 14px;
  height: 14px;
  margin-bottom: 30px;
  color: ${palette.primary};
`;

export default MyMbtiHeight;
