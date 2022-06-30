import React, { useState } from 'react';
import styled from 'styled-components';
import { SubTitle } from '@/lib/styles/styledComponents';
import { SurveyTemplate } from '@/components/domain/survey';
import { Input } from '@/components/base';
import { palette } from '@/lib/styles/palette';
import Path from '@/router/Path';
import { useDatingNavigate } from '@/hooks/common/useNavigate';
import { useDatingSessionState } from '@/hooks/common';

const MyMbtiHeight = () => {
  const datingNavigate = useDatingNavigate();
  const { initDatingState, setDatingData } = useDatingSessionState();
  const [mbti, setMbti] = useState(initDatingState.mbti);
  const [myHeight, setMyHeight] = useState(initDatingState.myHeight);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'mbti':
        setMbti(value);
        break;
      case 'myHeight':
        setMyHeight(Number(value));
    }
  };

  const handleNextClick = () => {
    if (initDatingState) {
      setDatingData({ ...initDatingState, mbti, myHeight });
    }

    datingNavigate(Path.MyBodySmoke);
  };

  return (
    <SurveyTemplate
      disableNext={!mbti || myHeight <= 0}
      currStep={4}
      totalStep={16}
      handlePrevClick={() => datingNavigate(Path.MyDepartmentCharacter)}
      handleNextClick={handleNextClick}
    >
      <StyledTitle>본인의 MBTI를 알려주세요.</StyledTitle>
      <Anchor target="_blank" href="https://types.my/quiz/create?step=5">
        나의 MBTI 알아보기
      </Anchor>
      <Input required variant="filled" isFocus height="48px" name="mbti" placeholder="나의 MBTI" maxLength={4} onChange={handleChange} value={mbti} />
      <InputWrapper>
        <StyledTitle>본인의 키를 알려주세요.</StyledTitle>
        <Description>키는 220cm 이하여야 합니다.</Description>
        <Input
          required
          variant="filled"
          height="48px"
          name="myHeight"
          placeholder="키(cm)"
          maxLength={3}
          onChange={handleChange}
          value={String(myHeight)}
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

const Description = styled.p`
  font-size: 14px;
  margin-bottom: 30px;
  color: ${palette.primary};
`;

export default MyMbtiHeight;
