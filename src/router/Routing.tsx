import Landing from '@/pages/Landing';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Path from '@/router/Path';
import Test from '@/components/base/Test';
import AuthMail from '@/pages/AuthMail';
import Survey from '@/pages/Survey';
import NotFound from '@/pages/NotFound';
import styled from 'styled-components';

function Routing() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={Path.LandingPage} element={<Landing />} />
          <Route path={Path.Component} element={<Test />} />
          <Route path={Path.AuthMail} element={<AuthMail />} />
          <Route path={Path.Survey} element={<Survey />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

const Layout = styled.main`
  margin: 0 16px;
  height: 100%;
`;

export default Routing;
