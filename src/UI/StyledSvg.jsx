import styled from 'styled-components';

export const StyledSvg = styled.svg`
  transition: 1.2s ease-in-out;
  position: absolute;
  left: 0.5rem;
  top: calc(50% - 40%);
  z-index: 20;
  @media (max-width: 768px) {
    height: 3rem;
    top: calc(50% - 35%);
    left: -0.5rem;
  }
  @media (min-width: 769px) {
    scale: 0.7;
  }
  @media (min-width: 900px) {
    scale: 1;
  }
  @media (orientation: landscape) {
    fill: transparent;
  }
`;
