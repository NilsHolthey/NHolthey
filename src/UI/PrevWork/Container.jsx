import styled from 'styled-components';

export const Container = styled.section`
  height: 100vh;
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #f8f8f8;
  background: #dcdcdc;
  @media (max-width: 765px) {
    width: 100vw;
    height: 120vh;
  }
`;
