import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Path from '@/router/Path';
import Landing from '@/pages/Landing';
import Test from '@/components/base/Test';
import AuthMail from '@/pages/AuthMail';
import Survey from '@/pages/Survey';
import NotFound from '@/pages/NotFound';

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Path.LandingPage} element={<Landing />} />
        <Route path={Path.Component} element={<Test />} />
        <Route path={Path.AuthMail} element={<AuthMail />} />
        <Route path={Path.Survey} element={<Survey />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
