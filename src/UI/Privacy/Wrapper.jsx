import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    background-image: url('/blurry-gradient-haikei1.png');
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.5;
    z-index: -2;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
  }
`;
