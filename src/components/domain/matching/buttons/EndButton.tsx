import { Button } from '@/components/base';
import React from 'react';

function EndButton() {
  const handleClick = () => {
    console.log('asd');
  };
  return (
    <Button onClick={handleClick} size="medium" variant={'default'}>
      다시 매칭하기
    </Button>
  );
}

export default EndButton;
