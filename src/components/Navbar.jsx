import { useEffect } from 'react';
import { Nav } from '../UI/Nav';
import Burger from '../UI/Navigation/Burger';
import { NavLink } from '../UI/NavLink';
import { NavList } from '../UI/NavList';
import Logo2 from './images/Logo2';

export default function Navbar() {
  const changeColor = () => {
    if (window.scrollY > 50) {
      changeToHidden();
    } else {
      resetDisply();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeColor);
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  function changeToHidden() {
    let myNav = document.getElementById('navList');

    myNav.style.transform = 'translateX(-200%)';
    myNav.style.opacity = '0';
  }
  function resetDisply() {
    let myNav = document.getElementById('navList');
    myNav.style.transform = 'translateX(0)';
    myNav.style.opacity = '1';
  }

  return (
    <Nav>
      <a href="#home">
        <Logo2 />
      </a>
      <Burger />
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
