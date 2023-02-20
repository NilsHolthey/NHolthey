import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70vw;
  /* background: radial-gradient(
    150rem circle at 0 0,
    rgba(255, 110, 199, 0),
    transparent 0%
  ); */
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

  @media (max-width: 765px) and (orientation: portrait) {
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
    height: fit-content;
    padding-bottom: unset;
    width: 70vw;
    min-height: unset;
  }
  @media (max-width: 965px) and (orientation: landscape) {
    height: fit-content;
    padding-bottom: unset;
    width: 90vw;
    min-height: 400px;
  }
`;
