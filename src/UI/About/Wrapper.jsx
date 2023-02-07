import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100dvw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.9s ease;
  /* background: #dcdcdc; */

  position: relative;

  z-index: 2;

  @media (max-width: 765px) {
    height: 200vh;
  }
  @media (orientation: portrait) {
    height: fit-content;
    padding-top: 10vh;
    padding-bottom: 15vh;
  }

  &:hover {
    .card {
      background: radial-gradient(
        120rem circle at var(--xPos) var(--yPos),
        rgba(255, 110, 199, 0.8),
        transparent 25%
      );
    }
  }
`;
