import React from 'react';
import styled from 'styled-components';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Path from '@/router/Path';
import {
  AuthMail,
  NotFound,
  LandingPage,
  TypeOfMeetingSurvey,
  OurDepartmentsAverageHeightSurvey,
  PreferAverageAgeHeightSurvey,
  AvoidUniversitiesSurvey,
  PreferUniversitiesSurvey,
  PreferDepartmentsSurvey,
  MindsetSurvey,
  PlaySurvey,
  IsAbroadSurvey,
  DomesticAreasSurvey,
  AbroadAreasSurvey,
  ChannelSurvey,
  AgreementSurvey,
  KakaoIdSurvey,
  GenderAverageAgeSurvey,
} from '@/pages';
import Test from '@/components/base/Test';

function Routing() {
  return (
    <BrowserRouter>
      <PageLayout>
        <PageWrapper>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path={Path.LandingPage} element={<LandingPage />} />
            <Route path={Path.Component} element={<Test />} />
            <Route path={Path.AuthMail} element={<AuthMail />} />
            <Route path={Path.TypeOfMeetingSurvey} element={<TypeOfMeetingSurvey />} />
            <Route path={Path.GenderAverageAgeSurvey} element={<GenderAverageAgeSurvey />} />
            <Route path={Path.OurDepartmentsAverageHeightSurve} element={<OurDepartmentsAverageHeightSurvey />} />
            <Route path={Path.AvoidUniversitiesSurvey} element={<AvoidUniversitiesSurvey />} />
            <Route path={Path.PreferUniversitiesSurvey} element={<PreferUniversitiesSurvey />} />
            <Route path={Path.PreferDepartmentsSurvey} element={<PreferDepartmentsSurvey />} />
            <Route path={Path.PreferAverageAgeHeightSurvey} element={<PreferAverageAgeHeightSurvey />} />
            <Route path={Path.MindsetSurvey} element={<MindsetSurvey />} />
            <Route path={Path.PlaySurvey} element={<PlaySurvey />} />
            <Route path={Path.IsAbroadSurvey} element={<IsAbroadSurvey />} />
            <Route path={Path.DomesticAreasSurvey} element={<DomesticAreasSurvey />} />
            <Route path={Path.AbroadAreasSurvey} element={<AbroadAreasSurvey />} />
            <Route path={Path.ChannelSurvey} element={<ChannelSurvey />} />
            <Route path={Path.AgreementSurvey} element={<AgreementSurvey />} />
            <Route path={Path.KakaoIdSurvey} element={<KakaoIdSurvey />} />
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
