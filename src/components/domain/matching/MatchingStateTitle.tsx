import React from 'react';

function MatchingStateTitle(state: string) {
  return (
    <>
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
        }[state]
      }
    </>
  );
}

export default MatchingStateTitle;
