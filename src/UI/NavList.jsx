import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 40vw;
  list-style: none;
  padding: none;

  animation: slideIn 1.5s ease-in-out;
  font-weight: 900;
  gap: 1rem;
  font-size: 1.1rem;
  position: fixed;
  right: 30%;
  transition: all 0.9s linear;
  z-index: 5;
  transform: ${({ isScrolled }) => (isScrolled ? 'translateX(-200%)' : '')};
  opacity: ${({ isScrolled }) => (isScrolled ? '0' : '')};

  li {
    transition: scale 350ms ease, opacity 350ms linear;
  }

  &:has(li:hover) li:not(:hover) {
    scale: 0.98;
    opacity: 0.7;
  }

  @keyframes slideIn {
    from {
      transform: translateY(-350%);
    }
    to {
      transform: translateY(0);
    }
  }

  li {
    opacity: 0.8;

    &:hover {
      scale: 1.1;
      -webkit-box-reflect: below 0
        linear-gradient(to bottom, transparent, #88888854);
    }
  }

  @media (orientation: portrait) {
    margin-left: 20px;
  }
`;
