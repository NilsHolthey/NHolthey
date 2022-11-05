import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;
  /* background: rgba(28, 32, 40, 1); */

  @media (max-width: 765px) {
    height: 180vh;
  }
`;
