import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

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
    color: #f8f8f8;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Home</li>
      <li>AboutMe</li>
      <li>Skillset</li>
      <li>Contacts</li>
    </Ul>
  );
};

export default RightNav;
