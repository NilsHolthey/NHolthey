import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;
  background-color: #1c2028;
  @media (max-width: 665px) {
    height: 180vh;
  }
`;
