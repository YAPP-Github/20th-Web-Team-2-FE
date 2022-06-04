import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Path from '@/router/Path';
import Test from '@/components/base/Test';
import AuthMail from '@/pages/AuthMail';
import Survey from '@/pages/Survey';
import NotFound from '@/pages/NotFound';
import styled from 'styled-components';
import LandingPage from '@/pages/LandingPage';
import FoundPath from '@/pages/FoundPath';
import Agreement from '@/pages/Agreement';
import InputKaKao from '@/pages/InputKaKao';

function Routing() {
  return (
    <BrowserRouter>
      <PageLayout>
        <PageWrapper>
          <Routes>
            <Route path={Path.LandingPage} element={<LandingPage />} />
            <Route path={Path.Component} element={<Test />} />
            <Route path={Path.AuthMail} element={<AuthMail />} />
            <Route path={Path.Survey} element={<Survey />} />
            <Route path={Path.Survey16} element={<FoundPath />} />
            <Route path={Path.Survey17} element={<Agreement />} />
            <Route path={Path.Survey18} element={<InputKaKao />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageWrapper>
      </PageLayout>
    </BrowserRouter>
  );
}
const PageLayout = styled.div`
  margin: 0 auto;
  max-width: 344px;
  height: 100%;
`;
const PageWrapper = styled.main`
  margin: 0 16px;
  height: 100%;
`;

export default Routing;
