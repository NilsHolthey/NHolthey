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
    /* background-image: unset;
    background-position: unset;
    background-size: unset; */
    background: #dcdcdc;
    background-repeat: no-repeat;
    background: linear-gradient(
      335deg,
      rgba(220, 220, 220, 1) 45%,
      rgba(167, 167, 167, 1) 100%
    );
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.4;
  }
  @media (orientation: portrait) {
    /* background-image: unset;
    background-position: unset;
    background-size: unset; */
    background: rgb(220, 220, 220);

    background: linear-gradient(
      335deg,
      rgba(220, 220, 220, 1) 45%,
      rgba(167, 167, 167, 1) 100%
    );
    background-size: 100% 100%;
    background-repeat: no-repeat;
    opacity: 0.4;
  }
  background-image: url('/blurry-gradient-haikei1.png');

  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.4;
  transition: all 1.1s ease-in-out;
`;
