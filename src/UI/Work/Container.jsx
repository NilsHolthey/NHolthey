import styled from 'styled-components';

export const Container = styled.section`
  width: 70vw;
  height: 80vh;
  background: rgba(25, 29, 36, 0.965);
  border-radius: 30px;
  display: flex;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 765px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90vw;
  }
  @media (orientation: portrait) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90vw;
  }
`;
