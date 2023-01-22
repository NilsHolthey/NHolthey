import styled from 'styled-components';

export const LoadingContainer = styled.section`
  width: 100dvw;
  height: 100dvh;
  /* background: rgb(220, 220, 220);
  background: linear-gradient(
    0deg,
    rgba(220, 220, 220, 1) 45%,
    rgba(167, 167, 167, 1) 100%
  ); */

  /* background-image: url('/blurry-gradient-haikei1.png');
  background-size: cover;
  background-repeat: no-repeat; */

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before {
    content: '';
    background-image: url('/blurry-gradient-haikei1.png');
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.4;
    @media (orientation: portrait) {
      opacity: 0.7;
    }
  }
  svg {
    z-index: 10;
  }
`;
