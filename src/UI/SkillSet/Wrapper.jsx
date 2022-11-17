import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #dcdcdc;
  @media (max-width: 765px) {
    width: 100vw;
    height: 180vh;
  }
  @media (orientation: portrait) {
    width: 100vw;
    height: 160vh;
  }
`;
