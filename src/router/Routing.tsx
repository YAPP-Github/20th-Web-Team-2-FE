import React from 'react';
import styled from 'styled-components';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Path from '@/router/Path';
import { Test } from '@/components/base';
import { AuthMail, Survey, NotFound, LandingPage, TypeOfMeetingSurvey, FoundPath } from '@/pages';

function Routing() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={Path.LandingPage} element={<LandingPage />} />
          <Route path={Path.Component} element={<Test />} />
          <Route path={Path.AuthMail} element={<AuthMail />} />
          <Route path={Path.Survey} element={<Survey />} />
          <Route path={Path.Survey16} element={<FoundPath />} />
          <Route path={Path.Survey17} element={<Agreement />} />
          <Route path={Path.TypeOfMeetingSurvey} element={<TypeOfMeetingSurvey />} />
          <Route path={Path.Survey9} element={<FoundPath />} />
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
