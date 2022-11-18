import styled from 'styled-components';

export const Container = styled.article`
  width: 70vw;
  height: 80vh;
  display: flex;

  align-items: center;
  border-radius: 8px;
  background: rgba(25, 29, 36, 0.965);
  position: relative;
  @media (max-width: 765px) {
    width: 90vw;

    flex-direction: column;
    justify-content: center;
  }
  @media (orientation: portrait) {
    width: 90vw;

    flex-direction: column;
    justify-content: center;
  }
`;
