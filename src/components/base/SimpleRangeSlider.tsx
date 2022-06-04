import styled from 'styled-components';
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';

export interface Ranges {
  min: number;
  max: number;
}

interface SimpleRangeSliderProps extends Ranges {
  onChange?: (rangeValues: Ranges) => void;
}

const SimpleRangeSlider = ({ min, max, onChange }: SimpleRangeSliderProps) => {
  const [maxVal, setMaxVal] = useState(Math.ceil((min + max) / 2));
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);
  const sign = useRef<HTMLSpanElement>(null);

  const getPercent = useCallback((value: number) => Math.round(((value - min) / (max - min)) * 100), [min, max]);
  const getMidValue = useCallback(
    (midLevel: 1 | 2) => {
      return min + Math.floor((max - min) / 3) * midLevel;
    },
    [min, max],
  );

  const handleChangeRange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setMaxVal(value);
    event.target.value = value.toString();
  };

  useEffect(() => {
    if (maxValRef.current) {
      const maxPercent = getPercent(maxVal);
      console.log(maxPercent, 'maxPercent');

      if (range.current) {
        range.current.style.width = `${maxPercent}%`;
      }
      if (sign.current) {
        sign.current.style.left = `calc(${maxPercent}% - ${sign.current.clientWidth / 2}px${maxPercent > 90 ? ' - 40px' : ''})`;
      }
    }
  }, [maxVal, getPercent]);

  useEffect(() => {
    onChange?.({ min, max: maxVal });
  }, [maxVal, onChange]);

  return (
    <Container>
      <SliderInput type="range" min={min} max={max} value={maxVal} ref={maxValRef} onChange={(event) => handleChangeRange(event)} zIndex={4} />

      <TrackWrapper>
        <Track />
        <Range ref={range} />
        <LabelWrapper>
          <Label>{min}</Label>
          <Label>{getMidValue(1)}</Label>
          <Label>{getMidValue(2)}</Label>
          <Label>{max}</Label>
        </LabelWrapper>
        <SignWrapper>
          <Sign ref={sign}>{maxVal}</Sign>
        </SignWrapper>
      </TrackWrapper>
    </Container>
  );
};

const Container = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SliderInput = styled.input<{ zIndex: number }>`
  pointer-events: none;
  position: absolute;
  height: 0;
  outline: none;
  width: calc(100% - 2rem);
  z-index: ${({ zIndex }) => zIndex};
  appearance: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    position: relative;
    pointer-events: all;
    appearance: none;
    background-color: ${({ theme }) => theme.palette.primary};
    width: 20px;
    height: 20px;
    cursor: pointer;
    border: none;
    border-radius: 50%;
    margin-top: 4px;
  }
`;

const TrackWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const SignWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Sign = styled.span`
  position: absolute;
  bottom: 16px;
  color: ${({ theme }) => theme.palette.white};
  font-weight: 600;
  font-size: 14px;
  line-height: 125%;
  text-align: center;
  background-color: ${({ theme }) => theme.palette.primary};
  border-radius: 4px;
  padding: 6px 8px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -7px;
    margin: 0 auto;
    width: 0;
    height: 0;
    border-top: 8px solid ${({ theme }) => theme.palette.primary};
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
  }
`;

const Track = styled.div`
  position: absolute;
  border-radius: 3px;
  height: 6px;
  border: 3px solid ${({ theme }) => theme.palette.grayLight};
  width: 100%;
  z-index: 1;
`;

const Range = styled.div`
  position: absolute;
  border-radius: 3px;
  height: 6px;
  z-index: 2;
  background-color: ${({ theme }) => theme.palette.primary};
`;

const LabelWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Label = styled.span`
  color: ${({ theme }) => theme.palette.black};
  font-size: 12px;
  margin-top: 20px;
`;

export default SimpleRangeSlider;
