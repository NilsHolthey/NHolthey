import styled from 'styled-components';

export const StyledStartSvg = styled.svg`
  opacity: 0;
  animation: scaleOut 1s cubic-bezier(0.88, 0.05, 0.92, 0.92);
  /* position: absolute; */
  z-index: 1000;
  /* top: 50%;
  left: 50%; */

  @keyframes scaleOut {
    0% {
      opacity: 1;
    }

    100% {
      scale: 100;
      opacity: 0;
      display: none;
    }
  }
`;
