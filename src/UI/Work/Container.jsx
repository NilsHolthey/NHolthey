import styled from 'styled-components';

export const Container = styled.section`
  width: 70vw;
  height: 80vh;
  background: rgba(25, 29, 36);
  border-radius: 8px;
  display: flex;
  max-width: 1449px;
  max-height: 876px;
  position: relative;

  @media (max-width: 765px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: 97vw;
  }
  @media (orientation: portrait) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: 97vw;
    padding-top: 3rem;
  }

  @media (max-width: 765px) and (orientation: landscape) {
    flex-direction: row;
    align-items: center;
    display: flex;
    justify-content: flex-end;
    width: 90vw;
  }
  @media (max-width: 965px) and (orientation: landscape) {
    width: 90vw;
    min-height: 90vh;
  }
`;
