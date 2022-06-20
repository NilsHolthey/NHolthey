import { Nav } from '../UI/Nav';
import { NavList } from '../UI/NavList';
import Logo2 from './images/Logo2';

export default function Navbar() {
  return (
    <Nav>
      <Logo2 />
      <NavList>
        <li>About</li>
        <li>Skillset</li>
        <li>Contact</li>
      </NavList>
    </Nav>
  );
}
