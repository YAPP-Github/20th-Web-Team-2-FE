import React, { useState } from 'react';
import { Button } from '@/components/base';
import { PAYMENT_URL } from '@/lib/constants';

declare global {
  interface Window {
    PaypleCpayAuthCheck: (params: any) => any;
    MainBodyAction: (params: string) => void;
  }
}

function SuccessButton() {
  window.onpopstate = (e) => {
    if (e) {
      window.MainBodyAction('close');
    }
  };

  const getPaymentResult = (res: any) => {
    console.log(res, 'res');
    const [payResult, setPayResult] = useState({});

    if (res.PCD_PAY_RST === 'success') {
      setPayResult({ ...res });
      // 전달받은 데이터를 서버에 보내기
    }
  };

  const handleClick = async () => {
    const payload = {
      PCD_PAY_TYPE: 'card',
      PCD_PAY_WORK: 'PAY',
      /* 01 : 빌링키결제 */
      PCD_CARD_VER: '01',

      PCD_PAY_OID: 'test099942200156938',
      PCD_PAYER_NO: 1234,
      PCD_PAYER_NAME: '홍길동',
      PCD_PAYER_HP: '01012345678',
      PCD_PAYER_EMAIL: 'dev@payple.kr',
      PCD_PAY_GOODS: '티셔츠',
      PCD_PAY_TOTAL: 10000,
      PCD_PAY_ISTAX: 'Y',
      PCD_PAY_TAXTOTAL: 10,

      PCD_AUTH_KEY: 'E3421H3J42K8274293J4H3J3',
      /* 파트너 인증시 받은 return_url 값 입력  */
      PCD_PAY_URL: PAYMENT_URL,
      PCD_RST_URL: '/index.html',
      callbackFunction: getPaymentResult,
    };

    try {
      // 가맹점 인증 api 응답 결과 success 시
      const res = await window.PaypleCpayAuthCheck(payload);
      return res;
    } catch (e) {
      console.error(e, 'requestPatmentAPI error');
    }
  };

  return (
    <>
      <Button id="payAction" onClick={handleClick} size="medium" variant={'kakao'}>
        <strong>카카오페이</strong>로 간편하고 안전하게 결제
      </Button>
    </>
  );
}

export default SuccessButton;
