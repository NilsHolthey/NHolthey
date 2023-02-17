import styled from 'styled-components';

export const NavUl = styled.ul`
  list-style: none;
  opacity: ${({ open }) => (open ? '1' : '0')};
  border-radius: ${({ open }) => (open ? '0 0 0 0' : '0 0 0 50%')};

  display: flex;
  flex-flow: column nowrap;
  background-color: #272c39;
  opacity: 0.97;
  position: fixed;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;

  transition: all 0.45s ease-out;
  align-items: center;
  justify-content: center;
  li {
    opacity: ${({ open }) => (open ? '1' : '0')};
    transform: ${({ open }) => (open ? 'translatey(0)' : 'translatey(200%)')};

    padding: 18px 10px;
    transition: all 1.8s ease-out;

    font-weight: 700;
    &:hover {
      span {
        color: #6667ab;
      }

      scale: 1.1;
      -webkit-box-reflect: below -5.2vh linear-gradient(to bottom, transparent
            30%, #8888882e);
      transition: all ease-in 0.3s;
    }

    span {
      cursor: pointer;
      text-decoration: none;
      font-size: 5.2vh;
      color: #f8f8f8;
      &:visited {
        color: #f8f8f8;
      }
      &:hover {
        color: #6667ab;
        transition: all ease-in 0.3s;
      }
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    padding-top: 6rem;
    margin-left: 0;
    padding-left: 0;
    li {
      span {
        padding: unset;
        font-size: 3vh;
        font-weight: 700;

        padding-top: 1rem;
      }
    }
  }
  @media (orientation: portrait) {
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 0 0 10rem 0;
    margin-left: 0;

    li {
      span {
        padding: unset;
        font-size: 3vh;
        font-weight: 700;

        padding-top: 1rem;
      }
    }
  }
`;
