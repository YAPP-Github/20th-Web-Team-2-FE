import React from 'react';
import Logo from '@/logo.svg?component';
import { Button } from '@/components/base/index';
import ProgressBar from '@/components/base/ProgressBar';
import MultiRangeSlider from '@/components/base/MultiRangeSlider';

const Test = () => {
  const onClick = () => console.log('hi');
  return (
    <header>
      <Logo />
      <p> size === 'medium', variant === 'default' </p>
      <Button onClick={onClick}>인증번호로 보내기</Button>
      <p> props === 'boxShadow' </p>
      <Button boxShadow>인증번호로 보내기</Button>
      <p> size === 'large' </p>
      <Button size="large">인증번호로 보내기</Button>
      <p> size === 'large' variant === 'gray' </p>
      <Button size="large" variant="gray">
        응답 수정하기
      </Button>
      <p> size === 'large' fontWeight = 700 </p>
      <Button size="large" fontWeight={700}>
        다음
      </Button>
      <p> size === 'large' variant === 'grayBlack' </p>
      <Button size="large" variant="grayBlack">
        다음
      </Button>
      <p> size === 'large' variant === 'grayBlack' width === 100 </p>
      <Button size="large" variant="grayBlack" width={100}>
        다음
      </Button>
      <p>프로그래스바</p>
      <ProgressBar currStep={3} totalStep={10} />
      <p>양방향 range input</p>
      <div></div>
      <MultiRangeSlider
        min={130}
        max={210}
        defaultMin={160}
        defaultMax={180}
        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
      />
      테스트
    </header>
  );
};

export default Test;
