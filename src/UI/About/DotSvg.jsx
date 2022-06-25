import styled from 'styled-components';

export const DotSvg = styled.svg`
  position: absolute;
  z-index: 10;
  right: -2.5rem;
  top: -3rem;
  opacity: 0.3;
  @media (max-width: 665px) {
    display: none;
  }
  @media (orientation: landscape) {
    width: 70pt;
    top: -4rem;
  }
`;
