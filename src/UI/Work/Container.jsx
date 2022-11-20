import styled from 'styled-components';

export const Container = styled.section`
  width: 70vw;
  height: 80vh;
  background: rgba(25, 29, 36, 0.965);
  border-radius: 8px;
  display: flex;

  position: relative;

  @media (max-width: 765px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: 90vw;
    overflow-x: hidden;
  }
  @media (orientation: portrait) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: 90vw;
    overflow-x: hidden;
  }

  @media (max-width: 765px) and (orientation: landscape) {
    flex-direction: row;
    align-items: center;
    display: flex;
    justify-content: flex-end;
    width: 90;
  }
`;
