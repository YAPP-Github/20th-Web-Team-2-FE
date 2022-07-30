import { Button } from '@/components/base';
import React from 'react';
import Path from '@/router/Path';
import { useNavigate } from 'react-router-dom';

function NoneButton() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(Path.TypeOfMeetingSurvey);
  };
  return (
    <Button onClick={handleClick} size="medium" variant={'default'}>
      설문하러 가기
    </Button>
  );
}

export default NoneButton;
