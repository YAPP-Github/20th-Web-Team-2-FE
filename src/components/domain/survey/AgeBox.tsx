import React, { useCallback } from 'react';
import styled from 'styled-components';
import { SubTitle } from '@/lib/styles/styledComponents';
import { SimpleRangeSlider, MultiRangeSlider } from '@/components/base';
import { OnChangeProps } from '@/components/base/SimpleRangeSlider';

interface AgeBoxProps {
  ageOption?: number;
  setAgeOption?: React.Dispatch<React.SetStateAction<number>>;
  multiAgeOption?: number[];
  setMultiAgeOption?: React.Dispatch<React.SetStateAction<number[]>>;
  children: React.ReactNode;
  isMulti?: boolean;
}

export const MIN_AGE = 20;
export const MAX_AGE = 35;

const AgeBox = ({ ageOption, setAgeOption, multiAgeOption, setMultiAgeOption, children, isMulti = false }: AgeBoxProps) => {
  const handleSimpleChange = useCallback(
    ({ max }: OnChangeProps) => {
      if (!isMulti && setAgeOption) {
        setAgeOption(max);
      }
    },
    [isMulti, setAgeOption],
  );

  const handleMultiChange = useCallback(
    ({ min, max }: OnChangeProps) => {
      if (isMulti && setMultiAgeOption) {
        setMultiAgeOption([min, max]);
      }
    },
    [isMulti, setMultiAgeOption],
  );

  return (
    <Container>
      <SubTitle>{children}</SubTitle>
      <RangeWrapper>
        {isMulti ? (
          <MultiRangeSlider min={MIN_AGE} max={MAX_AGE} initValue={multiAgeOption ?? [MIN_AGE, MAX_AGE]} onChange={handleMultiChange} />
        ) : (
          <SimpleRangeSlider min={MIN_AGE} max={MAX_AGE} initValue={ageOption ?? MAX_AGE} onChange={handleSimpleChange} />
        )}
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

export default React.memo(AgeBox);
