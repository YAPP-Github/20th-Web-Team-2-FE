import React from 'react';
import { Outlet } from 'react-router-dom';
import LoginCheck from '@/components/base/LoginCheck';

const Template = () => {
  return (
    <>
      <Outlet />
      <LoginCheck />
    </>
  );
};

export default Template;
