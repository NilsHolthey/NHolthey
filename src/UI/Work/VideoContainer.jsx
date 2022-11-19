import styled from 'styled-components';

export const VideoContainer = styled.section`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #000000ba;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  /* transform: -50% -50%; */
  z-index: 11111150;
  @media (max-width: 765px) {
    background-color: #000000;
  }
  @media (orientation: portrait) {
    background-color: #000000;
  }
`;
