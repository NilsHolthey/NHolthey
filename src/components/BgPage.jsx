import styled from 'styled-components';

export const BgPage = styled.section`
  width: 100vw;
  height: 100vh;
  position: fixed;

  top: 0;
  z-index: -2;
  background: rgb(220, 220, 220);
  background: linear-gradient(
    270deg,
    rgba(220, 220, 220, 1) 51%,
    rgba(167, 167, 167, 1) 100%
  );

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
`;
