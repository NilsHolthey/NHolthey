import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  width: 70vw;
  height: 70vh;
  background: rgba(25, 29, 36, 0.965);
  border-radius: 8px;
  /* background: #272c39;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 10%,
    rgba(39, 44, 57, 0.393) 30%,
    rgba(255, 255, 255, 0) 60%

  ); */
  @media (max-width: 765px) {
    width: 90vw;
    height: 90vh;
    flex-direction: column;
  }
`;
