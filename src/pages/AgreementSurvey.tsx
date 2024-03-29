import CheckBox from '@/components/base/CheckBox';
import { SurveyTemplate } from '@/components/domain/survey';
import useAgreementCheck from '@/hooks/agreement/useAgreementCheck';
import { palette } from '@/lib/styles/palette';
import { Title } from '@/lib/styles/styledComponents';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FormWrapper } from './AuthMail';
import Path from '@/router/Path';
import { useLocation, useMatch } from 'react-router-dom';
import { useDatingNavigate, useMeetingNavigate } from '@/hooks/common/useNavigate';
import { useMeetingSessionState, useDatingSessionState } from '@/hooks/common';
import { goKakaoLogin } from '@/utils/goKakaoLogin';
import { getOauthKakaoAge } from '@/lib/api/oauth';
import { LAST_MEETING_STEP, LAST_DATING_STEP } from '@/components/domain/survey/SurveyTemplate';
import { Modal } from '@/components/base';
import { ChevronIcon } from '@/assets/img';

const AgreementSurvey = () => {
  const location = useLocation();
  const matchMeeting = useMatch('/meeting/*');
  const meetingNavigate = matchMeeting ? useMeetingNavigate() : useDatingNavigate();
  const { initMeetingState, setMeetingData } = useMeetingSessionState();
  const { initDatingState, setDatingData } = useDatingSessionState();
  const { checkedList, checkedChoiceList, onChangeCheck, onChangeChoiceCheck, onCheckAll, isEssentialChecked, isAllchecked } = useAgreementCheck();
  const [modal, setModal] = useState({ open: false, title: '알림', message: '에러가 발생했습니다😭 다시한번 시도해 주세요!' });

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get('code') ?? '';

    if (!code) return;

    getOauthKakaoAge({ code, type: matchMeeting ? 'meeting' : 'dating' })
      .then((response) => {
        if (response) {
          meetingNavigate(Path.KakaoIdSurvey);
          return;
        }
        setModal({
          open: true,
          title: '성인 인증 필요',
          message:
            "설정 > 개인/ 보안> 카카오계정> 내 정보 관리> '생일을 알려주세요' 선택> '프로필 정보 추가 수집 동의' 선택> 생일 설정> 확인 후 연령대 정보 제공 동의를 눌러주세요.",
        });
      })
      .catch((e) => {
        setModal((prev) => ({ ...prev, open: true }));
        console.error(e);
      });
  }, [location]);

  const handleNextClick = () => {
    if (initMeetingState) {
      matchMeeting
        ? setMeetingData({ ...initMeetingState, agreement: isAllchecked })
        : setDatingData({ ...initDatingState, agreement: isAllchecked });
    }

    goKakaoLogin(matchMeeting ? 'meeting' : 'dating');
  };

  return (
    <>
      <SurveyTemplate
        disableNext={!isEssentialChecked}
        currStep={matchMeeting ? 14 : 15}
        totalStep={matchMeeting ? LAST_MEETING_STEP : LAST_DATING_STEP}
        handlePrevClick={() => meetingNavigate(Path.ChannelSurvey)}
        handleNextClick={handleNextClick}
      >
        <Title>
          약관동의를 <br />
          진행해주세요.
        </Title>
        <FormWrapper>
          <CheckBox text="전체동의" impotrant checked={isAllchecked} onChange={onCheckAll} />
          <DivisionLineStyled />
          {checkedList.map(({ checked, name, text, link }) => (
            <Item key={name}>
              <CheckBox key={text} text={text} name={name} checked={checked} onChange={onChangeCheck} />
              {link && (
                <a href={link} target="_blank" rel="noreferrer">
                  <img src={ChevronIcon} />
                </a>
              )}
            </Item>
          ))}
          {checkedChoiceList.map(({ checked, name, text }) => (
            <CheckBox key={text} text={text} name={name} checked={checked} onChange={onChangeChoiceCheck} />
          ))}
        </FormWrapper>
      </SurveyTemplate>
      {modal.open && (
        <Modal
          width={200}
          height={140}
          bottonName="확인"
          title={modal.title}
          text={modal.message}
          onToggleModal={() => setModal((prev) => ({ ...prev, open: false }))}
          onClick={() => {
            void 0;
          }}
        />
      )}
    </>
  );
};

export const DivisionLineStyled = styled.div`
  border: 0.75px solid ${palette.grayLight};
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 16px;
    height: 16px;

    img {
      width: 14px;
    }
  }
`;

export default AgreementSurvey;
