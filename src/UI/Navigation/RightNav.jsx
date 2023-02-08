import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  opacity: ${({ open }) => (open ? '1' : '0')};
  border-radius: ${({ open }) => (open ? '0 0 0 0' : '0 0 0 50%')};

  display: flex;
  flex-flow: column nowrap;
  background-color: #272c39;
  position: fixed;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  top: 0;
  right: 0;
  height: 100vh;
  width: 20%;
  padding-top: 3.5rem;
  transition: all 0.3s ease-out;
  li {
    opacity: ${({ open }) => (open ? '1' : '0')};
    padding: 18px 10px;

    font-weight: 700;

    a {
      text-decoration: none;
      font-size: 2.2vh;
      color: #f8f8f8;
      &:visited {
        color: #f8f8f8;
      }
      &:hover {
        color: #6667ab;

        transition: color ease-in 0.3s;
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
      a {
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
      a {
        padding: unset;
        font-size: 3vh;
        font-weight: 700;

        padding-top: 1rem;
      }
    }
  }
`;

const RightNav = ({ open, handelClick }) => {
  return (
    <Ul open={open}>
      <li>
        <a href="#home" onClick={handelClick}>
          Home
        </a>
      </li>
      <li>
        <a href="#about" onClick={handelClick}>
          AboutMe
        </a>
      </li>
      <li>
        <a href="#skillset" onClick={handelClick}>
          Skillset
        </a>
      </li>
      <li>
        <a href="#work" onClick={handelClick}>
          Work
        </a>
      </li>
      <li>
        <a href="#contacts" onClick={handelClick}>
          Contacts
        </a>
      </li>
    </Ul>
  );
};

export default RightNav;
