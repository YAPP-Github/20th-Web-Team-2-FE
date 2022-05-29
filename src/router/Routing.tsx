import Landing from '@/pages/Landing';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Path from './Path';

function Routing() {
  return (
    <Routes>
      {/* <Route path="*" element={<NotFoundPage />} /> */}
      <Route path={Path.LandingPage} element={<Landing />} />
    </Routes>
  );
}

export default Routing;
