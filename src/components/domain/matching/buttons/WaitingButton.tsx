import { Button } from '@/components/base';
import React from 'react';

function WaitingButton() {
  const handleClick = () => {
    console.log('asd');
  };
  return (
    <Button onClick={handleClick} size="medium" variant={'default'}>
      랜덤매칭
    </Button>
  );
}

export default WaitingButton;
