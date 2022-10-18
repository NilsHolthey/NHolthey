import styled from 'styled-components';

export const NavLink = styled.a`
  text-decoration: none;
  color: #272c39;
  font-family: 'Fjalla One', sans-serif;
  &:visited {
    color: #272c39;
  }
  &:hover {
    color: #6667ab;
    outline: 2px solid #6667ab;
    outline-offset: 6px;
    transition: ease-in 0.3s;
  }
`;
