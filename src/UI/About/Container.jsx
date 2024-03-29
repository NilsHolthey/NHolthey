import styled from 'styled-components';

export const Container = styled.section`
  width: 80vw;
  height: 80vh;
  max-width: 1449px;
  max-height: 876px;
  display: flex;
  /* color: #f8f8f8; */
  border-radius: 8px;
  z-index: 0;
  align-items: center;
  justify-content: center;
  position: relative;
  /* background: radial-gradient(
    100rem circle at var(--xPos) var(--yPos),
    rgba(255, 110, 199, 0.8),
    transparent 25%
  ); */
  background: radial-gradient(
    150rem circle at 0 0,
    rgba(255, 110, 199, 0),
    transparent 0%
  );
  /* transition: all 0.15s; */
  @media (max-width: 765px) {
    width: 90vw;
    display: flex;
    height: 160vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (orientation: portrait) {
    flex-direction: column-reverse;
    width: 90vw;
    min-height: 80vh;
    display: flex;
    height: fit-content;
    align-items: center;
    justify-content: center;
    max-height: unset;
  }

  @media (max-width: 965px) and (orientation: landscape) {
    width: 90vw;
    min-height: 90vh;
  }
`;
