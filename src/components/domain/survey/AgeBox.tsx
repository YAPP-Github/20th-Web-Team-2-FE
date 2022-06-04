import React from 'react';
import styled from 'styled-components';
import { SubTitle } from '@/lib/styles/styledComponents';
import { SimpleRangeSlider } from '@/components/base';
import { Ranges } from '@/components/base/SimpleRangeSlider';

interface AgeBoxProps {
  setAgeOption: React.Dispatch<React.SetStateAction<number>>;
  children: React.ReactNode;
}

export const MIN_AGE = 20;
export const MAX_AGE = 35;

const AgeBox = ({ setAgeOption, children }: AgeBoxProps) => {
  const handleChange = ({ _, max }: Ranges) => {
    setAgeOption(max);
  };

  return (
    <Container>
      <SubTitle>{children}</SubTitle>
      <RangeWrapper>
        <SimpleRangeSlider min={MIN_AGE} max={MAX_AGE} onChange={handleChange} />
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

export default AgeBox;
