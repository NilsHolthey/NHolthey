import styled from 'styled-components';

export const ScreenShot = styled.img`
  height: 90%;
  z-index: 0;

  @media (max-width: 765px) {
    height: 60%;
  }

  @media (orientation: portrait) {
    height: 60%;
  }

  @media (max-width: 765px) and (orientation: landscape) {
    height: 90%;
  }
`;
