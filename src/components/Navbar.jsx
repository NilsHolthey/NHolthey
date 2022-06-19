import { Nav } from '../UI/Nav';
import { NavList } from '../UI/NavList';
import Logo from './images/Logo';

export default function Navbar() {
  return (
    <Nav>
      <Logo />
      <NavList>
        <li>About</li>
        <li>Skillset</li>
        <li>Contact</li>
      </NavList>
    </Nav>
  );
}
