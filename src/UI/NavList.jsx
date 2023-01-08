import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 40vw;
  list-style: none;
  padding: none;
  margin-right: 1em;
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
      -webkit-box-reflect: below 0
        linear-gradient(to bottom, transparent, #88888854);
    }
  }
`;
