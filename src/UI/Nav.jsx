import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 25vw;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 5rem;
  opacity: 1;
  background-color: transparent;
  z-index: 1000005;
  @media (orientation: portrait) {
    top: 0.5rem;
  }
`;
