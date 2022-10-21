import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;

  flex-flow: column nowrap;
  background-color: #272c39;
  position: fixed;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  top: -1rem;
  right: 0;
  height: 100vh;
  width: 20%;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  li {
    padding: 18px 10px;
    color: #f8f8f8;
    font-weight: 700;
    a {
      text-decoration: none;

      color: #f8f8f8;
      &:visited {
        color: inherit;
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
      padding: unset;
      font-size: 1.6rem;
      font-weight: 700;

      padding-top: 1rem;
    }
  }
`;

const RightNav = ({ open, setOpen }) => {
  return (
    <Ul open={open}>
      <li>Home</li>
      <li>
        <a href="#about" onClick={() => setOpen(!open)}>
          AboutMe
        </a>
      </li>
      <li>
        <a href="#skillset" onClick={() => setOpen(!open)}>
          Skillset
        </a>
      </li>
      <li>
        <a href="#contacts" onClick={() => setOpen(!open)}>
          Contacts
        </a>
      </li>
    </Ul>
  );
};

export default RightNav;
