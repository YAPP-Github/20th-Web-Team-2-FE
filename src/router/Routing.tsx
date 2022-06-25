import React from 'react';
import styled from 'styled-components';
import { Route, Routes, BrowserRouter, Outlet } from 'react-router-dom';
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
  OurUniversitiesSurvey,
  MyDepartmentCharacter,
  MyMbtiHeight,
  MyBodySmoke,
  MyDateCount,
  PreferDepartmentCharacterSurvey,
  MyGenderAge,
  OauthKakao,
  PreferBodyDateCountSurvey,
  MatchingPage,
} from '@/pages';
import Test from '@/components/base/Test';

function Routing() {
  return (
    <BrowserRouter>
      <PageLayout>
        <PageWrapper>
          <Routes>
            <Route path={Path.LandingPage} element={<LandingPage />} />
            <Route path={Path.Component} element={<Test />} />
            <Route path={Path.AuthMail} element={<AuthMail />} />
            <Route path={Path.TypeOfMeetingSurvey} element={<TypeOfMeetingSurvey />} />
            <Route path={Path.OauthKakao} element={<OauthKakao />} />
            <Route path={'/meeting'} element={<Outlet />}>
              <Route path={Path.GenderAverageAgeSurvey} element={<GenderAverageAgeSurvey />} />
              <Route path={Path.OurUniversitiesSurvey} element={<OurUniversitiesSurvey />} />
              <Route path={Path.OurDepartmentsAverageHeightSurvey} element={<OurDepartmentsAverageHeightSurvey />} />
              <Route path={Path.AvoidUniversitiesSurvey} element={<AvoidUniversitiesSurvey />} />
              <Route path={Path.PreferUniversitiesSurvey} element={<PreferUniversitiesSurvey />} />
              <Route path={Path.PreferDepartmentsSurvey} element={<PreferDepartmentsSurvey />} />
              <Route path={Path.PreferAgeHeightSurvey} element={<PreferAverageAgeHeightSurvey />} />
              <Route path={Path.MindsetSurvey} element={<MindsetSurvey />} />
              <Route path={Path.PlaySurvey} element={<PlaySurvey />} />
              <Route path={Path.IsAbroadSurvey} element={<IsAbroadSurvey />} />
              <Route path={Path.DomesticAreasSurvey} element={<DomesticAreasSurvey />} />
              <Route path={Path.AbroadAreasSurvey} element={<AbroadAreasSurvey />} />
              <Route path={Path.ChannelSurvey} element={<ChannelSurvey />} />
              <Route path={Path.AgreementSurvey} element={<AgreementSurvey />} />
              <Route path={Path.KakaoIdSurvey} element={<KakaoIdSurvey />} />
            </Route>
            <Route path={'/dating'} element={<Outlet />}>
              <Route path={Path.MyGenderAge} element={<MyGenderAge />} />
              <Route path={Path.MyDepartmentCharacter} element={<MyDepartmentCharacter />} />
              <Route path={Path.MyMbtiHeight} element={<MyMbtiHeight />} />
              <Route path={Path.MyBodySmoke} element={<MyBodySmoke />} />
              <Route path={Path.MyDateCount} element={<MyDateCount />} />
              <Route path={Path.AvoidUniversitiesSurvey} element={<AvoidUniversitiesSurvey />} />
              <Route path={Path.PreferUniversitiesSurvey} element={<PreferUniversitiesSurvey />} />
              <Route path={Path.PreferAgeHeightSurvey} element={<PreferAverageAgeHeightSurvey />} />
              <Route path={Path.PreferDepartmentCharacterSurvey} element={<PreferDepartmentCharacterSurvey />} />
              <Route path={Path.PreferBodyDateCountSurvey} element={<PreferBodyDateCountSurvey />} />
              <Route path={Path.IsAbroadSurvey} element={<IsAbroadSurvey />} />
              <Route path={Path.DomesticAreasSurvey} element={<DomesticAreasSurvey />} />
              <Route path={Path.AbroadAreasSurvey} element={<AbroadAreasSurvey />} />
              <Route path={Path.ChannelSurvey} element={<ChannelSurvey />} />
              <Route path={Path.AgreementSurvey} element={<AgreementSurvey />} />
              <Route path={Path.KakaoIdSurvey} element={<KakaoIdSurvey />} />
            </Route>
            <Route path={'/matching'} element={<Outlet />}>
              <Route path={Path.MatchingMeeting} element={<MatchingPage />} />
            </Route>
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
  height: 100%;
`;

export default Routing;
