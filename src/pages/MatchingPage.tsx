import MatchingTemplete from '@/components/domain/matching/MatchingTemplete';
import { Title } from '@/lib/styles/styledComponents';
import React from 'react';

const MatchingPage = () => {
  const TempData = { state: 'waiting' };
  return (
    <>
      <MatchingTemplete IsDisable={false}>
        <Title>
          <>
            {(function () {
              switch (TempData.state) {
                case 'none':
                  return (
                    <>
                      성사시킬
                      <br />
                      매칭이 없습니다.
                    </>
                  );
                case 'waiting':
                  return (
                    <>
                      매칭을
                      <br />
                      성사시키는 중입니다...
                    </>
                  );

                case 'success':
                  <>
                    매칭이
                    <br />
                    성사되었습니다!
                  </>;
                  break;
                case 'pay':
                  <>
                    결제가
                    <br />
                    완료되었습니다!
                  </>;
                  break;
                case 'end':
                  <>
                    매칭이
                    <br />
                    완료되었습니다!
                  </>;
                  break;
                default:
                  break;
              }
            })()}
          </>
        </Title>
      </MatchingTemplete>
    </>
  );
};

export default MatchingPage;
