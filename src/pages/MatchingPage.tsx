import MatchingTemplete from '@/components/domain/matching/MatchingTemplete';
import { Title } from '@/lib/styles/styledComponents';
import React from 'react';

const MatchingPage = () => {
  const TempData = { state: 'none' };
  return (
    <>
      <MatchingTemplete IsDisable={false} btnName={'설문하러 가기'}>
        <Title>
          {
            {
              none: (
                <strong>
                  성사시킬 매칭이
                  <br />
                  없습니다.
                </strong>
              ),
              waiting: (
                <strong>
                  성사시킬
                  <br />
                  매칭이 없습니다.
                </strong>
              ),
              success: (
                <strong>
                  매칭이
                  <br />
                  성사되었습니다!
                </strong>
              ),
              pay: (
                <strong>
                  결제가
                  <br />
                  완료되었습니다!
                </strong>
              ),

              end: (
                <strong>
                  매칭이
                  <br />
                  완료되었습니다!
                </strong>
              ),
            }[TempData.state]
          }
        </Title>
      </MatchingTemplete>
    </>
  );
};

export default MatchingPage;
