import Lottie from 'lottie-react';
import { partyAnimation } from '@/assets/lotties';
import styled from 'styled-components';
import { IntervalPoints } from '@/components/base';

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
              매칭을
              <br />
              성사시키는 중입니다 <IntervalPoints />
            </strong>
          ),
          success: (
            <strong>
              매칭이
              <br />
              성사되었습니다!
            </strong>
          ),
          femaleSuccess: (
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
            <>
              <LottieWrapper>
                <Lottie animationData={partyAnimation} loop={false} />
              </LottieWrapper>
              <strong>
                매칭이
                <br />
                완료되었습니다!
              </strong>
            </>
          ),
          fail: (
            <strong>
              매칭에
              <br />
              실패하였습니다.
            </strong>
          ),
          cancel: (
            <strong>
              매칭이
              <br />
              취소되었습니다.
            </strong>
          ),
        }[state]
      }
    </>
  );
}

const LottieWrapper = styled.div`
  top: -40px;
  right: 130px;
  position: absolute;
  user-select: none;
  width: 160px;
  transform: rotate(20deg);
`;

export default MatchingStateTitle;
