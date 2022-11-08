import styled from 'styled-components';

export const VideoBox = styled.section`
  height: 80%;
  width: 50%;
  position: absolute;

  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  transition: scale 300ms ease, left 300ms ease;
  @media (max-width: 765px) {
    scale: 0.8;
    left: 10%;
  }
`;
