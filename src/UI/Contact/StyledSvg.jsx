import styled from 'styled-components';

export const StyledSvg = styled.svg`
  opacity: 0.005;
  left: -60%;
  top: -60%;
  position: absolute;

  @media (max-width: 765px) {
    display: none;
  }
  @media (orientation: portrait) {
    display: none;
  }
`;
