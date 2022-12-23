import styled from 'styled-components';

export const BgPage = styled.section`
  width: 100vw;
  height: 100vh;
  position: fixed;

  top: 0;
  z-index: -2;
  /* background: #dcdcdc;
  background: linear-gradient(
    270deg,
    rgba(220, 220, 220, 1) 51%,
    rgba(167, 167, 167, 1) 100%
  ); */

  @media (max-width: 765px) {
    background: rgb(220, 220, 220);

    background: linear-gradient(
      335deg,
      rgba(220, 220, 220, 1) 45%,
      rgba(167, 167, 167, 1) 100%
    );
  }
  @media (orientation: portrait) {
    background: rgb(220, 220, 220);

    background: linear-gradient(
      335deg,
      rgba(220, 220, 220, 1) 45%,
      rgba(167, 167, 167, 1) 100%
    );
  }
  background-image: url('/blurry-gradient-haikei1.png');
  background-position: center;
  background-size: cover;
  opacity: 0.4;
  transition: all 1.1s ease-in-out;
`;
