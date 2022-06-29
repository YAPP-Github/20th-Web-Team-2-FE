import React, { useState } from 'react';
import { SubTitle } from '@/lib/styles/styledComponents';
import { SurveyTemplate } from '@/components/domain/survey';
import { Input } from '@/components/base';
import styled from 'styled-components';
import { palette } from '@/lib/styles/palette';
import Path from '@/router/Path';
import { useDatingNavigate } from '@/hooks/common/useNavigate';

const MyMbtiHeight = () => {
  const datingNavigate = useDatingNavigate();
  const [mbtiOption, setMbtiOption] = useState<string>('');
  const [myHeight, setMyHeight] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'mbti':
        setMbtiOption(value);
        break;
      case 'myHeight':
        setMyHeight(Number(value));
    }
  };

  return (
    <SurveyTemplate
      disableNext={!mbtiOption || myHeight <= 0}
      currStep={4}
      totalStep={12}
      handlePrevClick={() => datingNavigate(Path.MyDepartmentCharacter)}
      handleNextClick={() => datingNavigate(Path.MyBodySmoke)}
    >
      <StyledTitle>본인의 MBTI를 알려주세요.</StyledTitle>
      <Anchor target="_blank" href="https://types.my/quiz/create?step=5">
        나의 MBTI 알아보기
      </Anchor>
      <Input required variant="filled" isFocus height="48px" name="mbti" placeholder="나의 MBTI" maxLength={4} onChange={handleChange} />
      <InputWrapper>
        <StyledTitle>본인의 키를 알려주세요.</StyledTitle>
        <Description>키는 220cm 이하여야 합니다.</Description>
        <Input required variant="filled" height="48px" name="myHeight" placeholder="키(cm)" maxLength={3} onChange={handleChange} />
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
