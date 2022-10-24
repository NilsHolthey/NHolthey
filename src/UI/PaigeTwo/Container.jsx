import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;
  background: rgb(39, 44, 57);
  background: linear-gradient(
    180deg,
    rgba(39, 44, 57, 1) 25%,
    rgba(28, 32, 40, 1) 100%
  );
  @media (max-width: 665px) {
    height: 180vh;
  }
`;
