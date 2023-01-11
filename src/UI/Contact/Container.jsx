import styled from 'styled-components';

export const Container = styled.article`
  width: 70vw;
  height: 80vh;
  display: flex;
  align-items: center;
  border-radius: 8px;
  background: rgba(25, 29, 36);
  position: relative;

  @media (max-width: 765px) {
    width: 90vw;
    height: fit-content;
    padding-top: 3rem;
    padding-bottom: 5rem;
    flex-direction: column;
  }
  @media (orientation: portrait) {
    width: 90vw;
    padding-top: 3rem;
    padding-bottom: 5rem;
    height: fit-content;
    flex-direction: column;
  }
  @media (max-height: 465px) {
    height: fit-content;
    width: 70vw;
    padding-top: 3rem;

    padding-bottom: 5rem;
    justify-content: center;
    flex-direction: column;
    display: flex;
  }
  @media (max-width: 765px) and (orientation: landscape) {
    width: 90vw;
  }
`;
