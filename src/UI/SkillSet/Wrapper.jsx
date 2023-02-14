import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100dvw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: #dcdcdc; */

  &:hover {
    .container {
      background: radial-gradient(
        120rem circle at var(--xPos) var(--yPos),
        #773364,
        transparent 25%
      );
    }
  }
  @media (max-width: 765px) {
    width: 100vw;
    height: 180vh;
  }
  @media (orientation: portrait) {
    width: 100vw;
    height: fit-content;
    padding-top: 5vh;
    padding-bottom: 10vh;
  }
  @media (max-width: 765px) and (orientation: landscape) {
    width: 100vw;
    height: 250vh;
    padding-bottom: 2rem;
  }
`;
