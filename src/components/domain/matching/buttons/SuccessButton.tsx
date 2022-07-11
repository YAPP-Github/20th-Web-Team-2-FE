import React, { useState } from 'react';
import { Button } from '@/components/base';
import { getPartnerAuth } from '@/lib/api/payment';

declare global {
  interface Window {
    PaypleCpayAuthCheck: (params: any) => any;
    MainBodyAction: (params: string) => void;
  }
}

function SuccessButton() {
  const [payResult, setPayResult] = useState({});

  window.onpopstate = (e) => {
    if (e) {
      window.MainBodyAction('close');
    }
  };

  const getPaymentResult = (res: any) => {
    console.log(res, 'res');
    if (res.PCD_PAY_RST === 'success') {
      setPayResult({ ...res });
      // 전달받은 데이터를 서버에 보내기
    }
  };

  const handleClick = async () => {
    const data = await getPartnerAuth();
    if (data?.result !== 'success') {
      console.error(data?.result_msg);
      return;
    }
    const { AuthKey, return_url } = data;
    console.log(data, 'res');
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

      /* 파트너 인증시 받은 값 입력  */
      PCD_AUTH_KEY: AuthKey,
      PCD_PAY_URL: return_url,
      PCD_RST_URL: 'matching/meeting',
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
