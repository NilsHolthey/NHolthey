import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70vw;
  background: radial-gradient(
    150rem circle at 0 0,
    rgba(255, 110, 199, 0),
    transparent 0%
  );
  border-radius: 8px;
  height: 80vh;
  max-width: 1449px;
  max-height: 876px;
  /* background: #272c39;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 10%,
    rgba(39, 44, 57, 0.393) 30%,
    rgba(255, 255, 255, 0) 60%

  ); */
  &:hover {
    &::before {
      opacity: 1;
    }
  }
  &::before {
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: inherit;
    background: radial-gradient(
      30rem circle at var(--xPos) var(--yPos),
      rgba(233, 110, 255, 0.1),
      transparent 35%
    );
    opacity: 0;
    z-index: 1;
    transition: all 0.15s ease-in-out;
  }
  @media (max-width: 765px) {
    width: 97vw;
    min-height: 80vh;
    height: fit-content;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 3%;
  }
  @media (orientation: portrait) {
    width: 97vw;
    min-height: 80vh;
    /* height: fit-content; */
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 3%;
  }
  @media (max-width: 765px) and (orientation: landscape) {
    width: 90vw;
    height: fit-content;
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 965px) and (orientation: landscape) {
    height: fit-content;
    padding: 2rem;
  }
`;
