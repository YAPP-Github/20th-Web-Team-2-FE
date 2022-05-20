import styled from 'styled-components';
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';

export interface Ranges {
  min: number;
  max: number;
}

interface MultiRangeSliderProps extends Ranges {
  defaultMin?: number;
  defaultMax?: number;
  onChange?: (rangeValues: Ranges) => void;
}

const MultiRangeSlider = ({
  min,
  max,
  defaultMin = min,
  defaultMax = max,
  onChange,
}: MultiRangeSliderProps) => {
  const [minValue, setMinVal] = useState(defaultMin);
  const [maxValue, setMaxVal] = useState(defaultMax);
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const leftRange = useRef<HTMLDivElement>(null);
  const rightRange = useRef<HTMLDivElement>(null);
  const range = useRef<HTMLDivElement>(null);

  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max],
  );

  const handleRangeChange = (
    event: ChangeEvent<HTMLInputElement>,
    type: 'min' | 'max',
  ) => {
    const targetValue = type === 'min' ? maxValue - 1 : minValue + 1;
    const value = Math.min(Number(event.target.value), targetValue);
    type === 'min' ? setMinVal(value) : setMaxVal(value);
    event.target.value = value.toString();
  };

  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minValue);
      const maxPercent = getPercent(Number(maxValRef.current.value));

      if (leftRange.current) {
        leftRange.current.style.left = `${minPercent}%`;
      }
      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minValue, getPercent]);

  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(Number(minValRef.current.value));
      const maxPercent = getPercent(maxValue);

      if (rightRange.current) {
        rightRange.current.style.left = `${maxPercent}%`;
      }
      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxValue, getPercent]);

  useEffect(() => {
    onChange?.({ min: minValue, max: maxValue });
  }, [minValue, maxValue, onChange]);

  return (
    <Slider>
      <SliderInput
        type="range"
        id="input-left"
        min={min}
        max={max}
        value={minValue}
        ref={minValRef}
        onChange={(e) => handleRangeChange(e, 'min')}
        zIndex={minValue > max - 100 ? 5 : 3}
      />
      <SliderInput
        type="range"
        id="input-right"
        min={min}
        max={max}
        value={maxValue}
        ref={maxValRef}
        onChange={(e) => handleRangeChange(e, 'max')}
        zIndex={4}
      />
      <TrackWrapper>
        <Range ref={range}></Range>
        <Thumb ref={leftRange}></Thumb>
        <Thumb ref={rightRange}></Thumb>
      </TrackWrapper>
    </Slider>
  );
};

const Slider = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  padding: 1.5rem;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const SliderInput = styled.input<{ zIndex: number }>`
  width: calc(100% - 2rem);
  top: 1rem;
  left: 1rem;
  position: absolute;
  border: none;
  pointer-events: none;
  z-index: ${({ zIndex }) => zIndex};
  appearance: none;
  opacity: 0;

  &::-webkit-slider-thumb {
    position: relative;
    pointer-events: all;
    appearance: none;
    background-color: ${({ theme }) => theme.palette.primary};
    width: 2.5rem;
    height: 1.5rem;
    cursor: pointer;
  }

  &:first-child {
    top: 1rem;
  }
`;

const TrackWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0.5rem;
  background-color: ${({ theme }) => theme.palette.grayLight};
  border-radius: 0.5rem;
`;

const Range = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.palette.primary};
  border-radius: 0.5rem;
`;

const Thumb = styled.div`
  position: absolute;
  top: 0;
  transform: translateY(-0.25rem);
  width: 1rem;
  height: 1rem;
  background-color: ${({ theme }) => theme.palette.primary};
  border-radius: 50%;
`;

export default MultiRangeSlider;
