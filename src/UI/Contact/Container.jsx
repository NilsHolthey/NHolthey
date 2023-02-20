import styled from 'styled-components';

export const Container = styled.article`
  width: 70vw;
  height: 80vh;
  display: flex;
  align-items: center;
  border-radius: 8px;
  background: rgba(25, 29, 36);
  position: relative;
  max-width: 1449px;
  max-height: 876px;
  @media (max-width: 765px) {
    width: 97vw;
    height: fit-content;
    padding-top: 3rem;
    padding-bottom: 5rem;
    flex-direction: column;
  }
  @media (orientation: portrait) {
    width: 97vw;
    padding-top: 3rem;
    padding-bottom: 5rem;
    min-height: 80vh;
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
  @media (max-width: 965px) and (orientation: landscape) {
    width: 90vw;
    min-height: 90vh;
  }
`;
