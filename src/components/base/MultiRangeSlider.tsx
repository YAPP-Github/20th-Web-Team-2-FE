import styled from 'styled-components';
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';

export interface MultiRangeSliderProps {
  initValue: number[];
  min: number;
  max: number;
  onChange?: (rangeValues: OnChangeProps) => void;
}

export type OnChangeProps = Omit<MultiRangeSliderProps, 'initValue' | 'onChange'>;

const MultiRangeSlider = ({ initValue, min, max, onChange }: MultiRangeSliderProps) => {
  const [minVal, setMinVal] = useState(initValue[0]);
  const [maxVal, setMaxVal] = useState(initValue[1]);
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);
  const sign = useRef<HTMLOutputElement>(null);

  const getPercent = useCallback((value: number) => Math.round(((value - min) / (max - min)) * 100), [min, max]);
  const getMidValue = useCallback(
    (midLevel: 1 | 2) => {
      return min + Math.floor((max - min) / 3) * midLevel;
    },
    [min, max],
  );

  const handleChangeRange = (event: ChangeEvent<HTMLInputElement>, type: 'min' | 'max') => {
    const diffValue = type === 'min' ? maxVal - 1 : minVal + 1;
    const value = Math[type](Number(event.target.value), diffValue);
    type === 'min' ? setMinVal(value) : setMaxVal(value);
    event.target.value = value.toString();
  };

  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(Number(maxValRef.current.value));

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
      if (sign.current) {
        sign.current.style.left = `calc(${minPercent}% + (${8 - minPercent * 0.15}px - ${sign.current.clientWidth / 2}px${
          minPercent < 10 ? ' + 40px' : ''
        })`;
      }
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(Number(minValRef.current.value));
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
      if (sign.current) {
        sign.current.style.left = `calc(${maxPercent}% + (${8 - maxPercent * 0.15}px - ${sign.current.clientWidth / 2}px)${
          maxPercent > 90 ? ' - 40px' : ''
        }`;
      }
    }
  }, [maxVal, getPercent]);

  useEffect(() => {
    onChange?.({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <Container>
      <SliderInput
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onChange={(event) => handleChangeRange(event, 'min')}
        zIndex={minVal > max - 100 ? 5 : 3}
      />
      <SliderInput type="range" min={min} max={max} value={maxVal} ref={maxValRef} onChange={(event) => handleChangeRange(event, 'max')} zIndex={4} />

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
          <Sign ref={sign}>
            {minVal} - {maxVal}
          </Sign>
        </SignWrapper>
      </TrackWrapper>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
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
  width: 100%;
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
  //display: flex;
  //justify-content: center;
  position: relative;
`;

const Sign = styled.output`
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

export default MultiRangeSlider;
