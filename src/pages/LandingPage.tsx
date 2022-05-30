import LandingContainer from '@/components/domain/landing/LandingContainer';
import LandingFooter from '@/components/domain/landing/LandingFooter';
import React from 'react';
import styled from 'styled-components';

function Landing() {
  return (
    <LandingPageLayout>
      <LandingContainer />
      <LandingFooter />
    </LandingPageLayout>
  );
}

const LandingPageLayout = styled.div`
  margin: 0 auto;
  max-width: 344px;
  height: 100%;
`;

export default Landing;
