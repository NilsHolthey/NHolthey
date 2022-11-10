import styled from 'styled-components';

export const VideoBox = styled.section`
  height: 80%;
  width: 50%;
  position: absolute;
  scale: 0.8;
  top: 50%;
  right: 5%;
  z-index: 5;
  transform: translatey(-55%);
  transition: scale 300ms ease, left 300ms ease;
  @media (max-width: 765px) {
    scale: 0.6;
    left: 20%;
    div {
      width: 80vw;
    }
  }
`;
