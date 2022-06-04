import React from 'react';
import styled from 'styled-components';
import { SubTitle } from '@/lib/styles/styledComponents';
import MultiRangeSlider from '@/components/base/MultiRangeSlider';

interface GenderOfMeetingProps {
  setAgeOption: React.Dispatch<React.SetStateAction<number>>;
}

const GenderOfMeeting = ({ setAgeOption }: GenderOfMeetingProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    setAgeOption(Number(id));
  };

  return (
    <Container>
      <SubTitle>참여자의 평균 나이를 알려주세요.</SubTitle>
      <RangeWrapper>
        <MultiRangeSlider min={20} max={35} />
      </RangeWrapper>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  margin-top: 41px;
`;

const RangeWrapper = styled.div`
  margin-top: 30px;
`;

export default GenderOfMeeting;
