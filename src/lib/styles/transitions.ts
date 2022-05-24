import { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const pop = keyframes`
  50% {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
  60% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  60% {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
`;

const transitions = {
  fadeIn,
  pop,
};

export default transitions;
