import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Path from '@/router/Path';
import Test from '@/components/base/Test';
import AuthMail from '@/pages/AuthMail';
import Survey from '@/pages/Survey';
import NotFound from '@/pages/NotFound';
import styled from 'styled-components';
import LandingPage from '@/pages/LandingPage';
import TypeOfMeetingSurvey from '@/pages/TypeOfMeetingSurvey';
import FoundPath from '@/pages/FoundPath';
import MeetingSurvey5 from '@/pages/MeetingSurvey5';

function Routing() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={Path.LandingPage} element={<LandingPage />} />
          <Route path={Path.Component} element={<Test />} />
          <Route path={Path.AuthMail} element={<AuthMail />} />
          <Route path={Path.Survey} element={<Survey />} />
          <Route path={Path.TypeOfMeetingSurvey} element={<TypeOfMeetingSurvey />} />
          <Route path={Path.MeetingSurvey5} element={<MeetingSurvey5 />} />
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
