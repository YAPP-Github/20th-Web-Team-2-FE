import styled from 'styled-components';

export interface RangeNumber {
  min: number;
  max: number;
}

interface RangeInputProps extends RangeNumber {
  minValue: number;
  maxValue: number;
  onChange: (rangeValues: RangeNumber) => void;
}

const RangeInput = ({min, max, minValue, maxValue}: RangeInputProps) => {
  return (
    <Slider>
      <SliderInput type="range" id="input-left" min={min} max={max} value={minValue} />
      <SliderInput type="range" id="input-right" min={min} max={max} value={maxValue} />
      <TrackWrapper>
        <Range></Range>
        <Thumb className="thumb--left"></Thumb>
        <Thumb className="thumb--right"></Thumb>
      </TrackWrapper>
    </Slider>
  );
};

const Slider = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

const SliderInput = styled.input`
  width: calc(100% - 2rem);
  top: 1rem;
  left: 1rem;
  position: absolute;
  border: none;
  pointer-events: none;
  z-index: 10;
  appearance: none;
  opacity: 0;

  &::-webkit-slider-thumb {
    pointer-events: all;
    appearance:none;
    background-color: ${({ theme }) => theme.palette.primary};
    width: 2.5rem;
    height: 1.5rem;
  }
  
  &:first-child {
    top: 1rem;
  }
`;

const TrackWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0.5rem;
  margin-top: 5rem;
  background-color: ${({ theme }) => theme.palette.grayLight};;
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
  
  &--left {
    left: 0;
  }
  &--right {
    right: 0;
  }
`;


export default RangeInput;
