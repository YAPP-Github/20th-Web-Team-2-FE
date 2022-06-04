import { InstagramIcon, KakaoIcon } from '@/assets/img';
import { palette } from '@/lib/styles/palette';
import { DivisionLineStyled } from '@/pages/Agreement';
import React from 'react';
import styled from 'styled-components';
import { HeaderWrapper, Logo } from '../survey/SurveyTemplate';

function LandingFooter() {
  return (
    <FooterLayout>
      <FooterContents>
        <li>자주 묻는 질문</li>
        <li>연락처</li>
        <li>개인정보 처리방침</li>
        <li> 이용약관</li>
      </FooterContents>
      <DivisionLineStyled />
      <FooterLogo>
        <FaintLogo to="/">외딴썸</FaintLogo>
        <div>
          <IconStyled src={KakaoIcon} />
          <IconStyled src={InstagramIcon} />
        </div>
      </FooterLogo>
      <CompanyInfoBox>
        <CompanyInfoTit>대표자</CompanyInfoTit>이민석
        <CompanyInfoTit className="biz-num ">사업자 등록번호</CompanyInfoTit> 248-40-00874
      </CompanyInfoBox>
      <CompanyInfoBox>
        <CompanyInfoTit>주소지</CompanyInfoTit> 서울특별시 은평구 증산로 387-1
      </CompanyInfoBox>
    </FooterLayout>
  );
}

const FooterLayout = styled.footer`
  margin: 15px 16px 0 16px;
  padding-bottom: 50px;
`;

const FooterContents = styled.ul`
  display: flex;
  font-size: 10px;
  justify-content: space-between;
  color: ${palette.grayDarker};
  margin-bottom: 16px;
`;

const FaintLogo = styled(Logo)`
  color: rgba(0, 0, 0, 0.4);
`;

const FooterLogo = styled(HeaderWrapper)`
  margin: 0;
  display: flex;
  justify-content: space-between;
`;

const CompanyInfoTit = styled.h3`
  font-weight: 700px;
  margin: 0 4px 6px 0;
`;

const CompanyInfoBox = styled.div`
  font-size: 10px;
  display: flex;
  color: rgba(0, 0, 0, 0.4);
  .biz-num {
    margin-left: 10px;
  }
`;

const IconStyled = styled.img`
  width: 20px;
  margin-right: 8px;
`;

export default LandingFooter;
