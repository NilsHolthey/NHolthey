import { useEffect } from 'react';
import { Nav } from '../UI/Nav';
import { NavLink } from '../UI/NavLink';
import { NavList } from '../UI/NavList';
import Logo2 from './images/Logo2';

export default function Navbar() {
  const changeColor = () => {
    if (window.scrollY > window.innerHeight - 30) {
      changeToLight();
    } else {
      resetColor();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeColor);
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  function changeToLight() {
    let myNav = document.getElementById('navList');
    myNav.style.color = '#dcdcdc';
  }
  function resetColor() {
    let myNav = document.getElementById('navList');
    myNav.style.color = '#272c39';
  }

  return (
    <Nav>
      <Logo2 />
      <NavList id="navList">
        <li>
          <NavLink href="#">About</NavLink>
        </li>
        <li>
          <NavLink href="#skillset">Skillset</NavLink>
        </li>
        <NavLink href="#">Contacts</NavLink>
      </NavList>
    </Nav>
  );
}
