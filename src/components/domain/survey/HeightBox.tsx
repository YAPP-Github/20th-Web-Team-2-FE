import React, { useCallback } from 'react';
import styled from 'styled-components';
import { SubTitle } from '@/lib/styles/styledComponents';
import { MultiRangeSlider, SimpleRangeSlider } from '@/components/base';
import { Ranges } from '@/components/base/SimpleRangeSlider';

interface HeightBoxProps {
  setHeightOption?: React.Dispatch<React.SetStateAction<number>>;
  setMultiHeightOption?: React.Dispatch<React.SetStateAction<number[]>>;
  children: React.ReactNode;
  isMulti?: boolean;
}

export const MIN_HEIGHT = 120;
export const MAX_HEIGHT = 220;

const HeightBox = ({ setHeightOption, setMultiHeightOption, children, isMulti = false }: HeightBoxProps) => {
  console.log('render');
  const handleSimpleChange = useCallback(
    ({ _, max }: Ranges) => {
      if (!isMulti && setHeightOption) {
        setHeightOption(max);
      }
    },
    [isMulti, setHeightOption],
  );

  const handleMultiChange = useCallback(
    ({ min, max }: Ranges) => {
      if (isMulti && setMultiHeightOption) {
        setMultiHeightOption([min, max]);
      }
    },
    [isMulti, setMultiHeightOption],
  );

  return (
    <Container>
      <SubTitle>{children}</SubTitle>
      <RangeWrapper>
        {isMulti ? (
          <MultiRangeSlider min={MIN_HEIGHT} max={MAX_HEIGHT} onChange={handleMultiChange} />
        ) : (
          <SimpleRangeSlider min={MIN_HEIGHT} max={MAX_HEIGHT} onChange={handleSimpleChange} />
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

export default React.memo(HeightBox);
