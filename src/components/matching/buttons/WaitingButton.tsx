import { Button } from '@/components/base';
import React from 'react';

interface WaitingButtonProps {
  handleClick: () => Promise<void>;
}

function WaitingButton({ handleClick }: WaitingButtonProps) {
  return (
    <Button onClick={handleClick} size="medium" variant={'default'}>
      랜덤매칭
    </Button>
  );
}

export default WaitingButton;
