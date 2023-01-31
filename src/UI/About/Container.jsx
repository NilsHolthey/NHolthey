import styled from 'styled-components';

export const Container = styled.section`
  width: 70vw;
  height: 80vh;
  max-width: 1649px;
  max-height: 876px;
  display: flex;
  /* color: #f8f8f8; */
  border-radius: 8px;
  z-index: 0;
  padding: 1rem;
  position: relative;
  background: rgba(25, 29, 36);
  max-width: 1649px;
  height: 80vh;
  @media (max-width: 765px) {
    width: 90vw;
    display: flex;
    height: 160vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (orientation: portrait) {
    height: fit-content;
    flex-direction: column-reverse;
    width: 90vw;
    min-height: 80vh;
    display: flex;

    align-items: center;
    justify-content: center;
  }

  @media (max-width: 765px) and (orientation: landscape) {
    width: 90vw;
  }
`;
