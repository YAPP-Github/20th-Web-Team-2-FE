import React, { useCallback } from 'react';
import styled from 'styled-components';
import { SubTitle } from '@/lib/styles/styledComponents';
import { MultiRangeSlider, SimpleRangeSlider } from '@/components/base';
import { OnChangeProps } from '@/components/base/SimpleRangeSlider';

interface HeightBoxProps {
  heightOption?: number;
  multiHeightOption?: number[];
  setHeightOption?: React.Dispatch<React.SetStateAction<number>>;
  setMultiHeightOption?: React.Dispatch<React.SetStateAction<number[]>>;
  children: React.ReactNode;
  isMulti?: boolean;
}

export const MIN_HEIGHT = 120;
export const MAX_HEIGHT = 220;

const HeightBox = ({ heightOption, setHeightOption, multiHeightOption, setMultiHeightOption, children, isMulti = false }: HeightBoxProps) => {
  if (isMulti && !setMultiHeightOption) {
    throw new Error('setMultiHeightOption is required when isMulti is true');
  }

  if (!isMulti && setMultiHeightOption) {
    throw new Error('isMulti is required when setMultiHeightOption is truty');
  }

  const handleSimpleChange = useCallback(
    ({ max }: OnChangeProps) => {
      if (!isMulti && setHeightOption) {
        setHeightOption(max);
      }
    },
    [isMulti, setHeightOption],
  );

  const handleMultiChange = useCallback(
    ({ min, max }: OnChangeProps) => {
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
          <MultiRangeSlider
            initValue={multiHeightOption ?? [MIN_HEIGHT, MAX_HEIGHT]}
            min={MIN_HEIGHT}
            max={MAX_HEIGHT}
            onChange={handleMultiChange}
          />
        ) : (
          <SimpleRangeSlider min={MIN_HEIGHT} max={MAX_HEIGHT} initValue={heightOption ?? MAX_HEIGHT} onChange={handleSimpleChange} />
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
