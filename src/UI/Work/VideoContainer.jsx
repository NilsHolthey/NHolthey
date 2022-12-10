import styled from 'styled-components';

export const VideoContainer = styled.section`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #000000ba;
  transition: all 1s ease-in-out;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  /* transform: -50% -50%; */
  z-index: 11111150;
  @media (max-width: 765px) {
    background-color: #000000ba;
  }
  @media (orientation: portrait) {
    background-color: #000000ba;
  }
`;
