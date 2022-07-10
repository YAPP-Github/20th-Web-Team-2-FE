import { Button } from '@/components/base';
import React from 'react';

function SuccessButton() {
  const handleClick = () => {
    console.log('asd');
  };
  return (
    <Button onClick={handleClick} size="medium" variant={'kakao'}>
      <strong>카카오페이</strong>로 간편하고 안전하게 결제
    </Button>
  );
}

export default SuccessButton;
