import { Button, Input, Modal } from '@/components/base';
import { SurveyTemplate } from '@/components/domain/survey';
import useToggle from '@/hooks/common/useToggle';
import { palette } from '@/lib/styles/palette';
import { Title } from '@/lib/styles/styledComponents';
import React, { useState } from 'react';
import styled from 'styled-components';
import { FormWrapper } from './AuthMail';
import Path from '@/router/Path';
import { useMeetingNavigate } from '@/hooks/common/useMeetingNavigate';

const KakaoIdSurvey = () => {
  const meetingNavigate = useMeetingNavigate();
  const [isModal, onToggleModal] = useToggle();
  const [kakaoID, setkakaoID] = useState('');

  return (
    <>
      <SurveyTemplate
        disableNext={false}
        hasProgressBar={true}
        currStep={14}
        totalStep={14}
        handlePrevClick={() => meetingNavigate(Path.AgreementSurvey)}
        handleNextClick={() => alert('설문이 완료되었습니다. 정식 출시가 되면 매칭을 시작할 수 있습니다. 조금만 기다려 주세요.')}
      >
        <Title>
          카톡 아이디를 <br />
          알려주세요.
        </Title>
        <SubTitle>
          매칭이 성사되면 10,000원 <br />
          결제후 상대방에게 전달됩니다.
        </SubTitle>
        <InputWrapper>
          <Input
            isFocus
            variant="filled"
            placeholder="카톡 아이디"
            value={kakaoID}
            height="48px"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setkakaoID(e.target.value);
            }}
          />
          <Explane>※'카톡 ID 검색 허용'으로 되어있어야 합니다.</Explane>
          <Button width={100} onClick={onToggleModal}>
            (임시 버튼)
          </Button>
        </InputWrapper>
      </SurveyTemplate>
      {isModal && (
        <Modal
          width={200}
          height={140}
          bottonName="확인"
          title={kakaoID}
          text="　카톡아이디를 확인해 주세요.　상대에게 보여질 아아디입니다!"
          onToggleModal={onToggleModal}
          onClick={() => {
            console.log('안녕하세용');
          }}
        />
      )}
    </>
  );
};

const SubTitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
  margin-top: 46px;
`;
const Explane = styled.p`
  margin: 16px 0 16px 0;
  font-size: 12px;
  color: ${palette.explanationColor};
`;
const InputWrapper = styled(FormWrapper)`
  margin-top: 46px;
`;

export default KakaoIdSurvey;
