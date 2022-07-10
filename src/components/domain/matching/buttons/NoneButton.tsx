import { Button } from '@/components/base';
import React from 'react';

function NoneButton() {
  const handleClick = () => {
    console.log('asd');
  };
  return (
    <Button onClick={handleClick} size="medium" variant={'default'}>
      설문하러 가기
    </Button>
  );
}

export default NoneButton;
