import { InstagramIcon, KakaoIcon } from '@/assets/img';
import { palette } from '@/lib/styles/palette';
import { DivisionLineStyled } from '@/pages/AgreementSurvey';
import React from 'react';
import styled from 'styled-components';
import { HeaderWrapper, Logo } from '../survey/SurveyTemplate';
const LINKS: { text: string; link: string }[] = [
  { text: '자주 묻는 질문', link: 'https://charmed-hyacinth-41c.notion.site/45e4a91845e2474da8fdb55a6e5f6a50' },
  { text: '연락처', link: 'https://charmed-hyacinth-41c.notion.site/45f2555e41a1433eb48b5bc16557feee' },
  { text: '개인정보 처리방침', link: 'https://charmed-hyacinth-41c.notion.site/8f1e211d74774e7288ca3352c54566a0' },
  { text: '이용약관', link: 'https://charmed-hyacinth-41c.notion.site/0861ec794c8f43a0b466c20e82f12de7' },
];
function LandingFooter() {
  return (
    <FooterLayout>
      <FooterContents>
        {LINKS.map(({ text, link }) => (
          <li
            key={link}
            onClick={() => {
              window.open(link as string, '_blank');
            }}
          >
            {text}
          </li>
        ))}
      </FooterContents>
      <DivisionLineStyled />
      <FooterLogo>
        <FaintLogo to="/">외딴썸</FaintLogo>
        <div>
          <IconStyled
            src={KakaoIcon}
            onClick={() => {
              window.open('http://pf.kakao.com/_XUkxkb', '_blank');
            }}
          />
          <IconStyled
            src={InstagramIcon}
            onClick={() => {
              window.open('https://www.instagram.com/lonessum_official/', '_blank');
            }}
          />
        </div>
      </FooterLogo>
      <CompanyInfoBox>
        <CompanyInfoTit>대표자</CompanyInfoTit>이민석
        <CompanyInfoTit className="biz-num ">사업자 등록번호</CompanyInfoTit> 248-40-00874
      </CompanyInfoBox>
      <CompanyInfoBox>
        <CompanyInfoTit>주소지</CompanyInfoTit> 서울특별시 은평구 증산로 387-1 6층
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
  li {
    cursor: pointer;
  }
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
