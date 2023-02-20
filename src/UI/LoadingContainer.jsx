import styled from 'styled-components';

export const LoadingContainer = styled.section`
  width: 100vw;
  height: 100vh;
  width: 100dvw;
  height: 100dvh;
  background: rgba(102, 103, 171, 1);
  background: radial-gradient(
    circle,
    rgba(167, 167, 198, 0) 0%,
    rgba(102, 103, 171, 0.4) 100%
  );
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

  svg {
    z-index: 1;
  }
`;
