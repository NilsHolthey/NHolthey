// import { motion } from 'framer-motion';
import { useState } from 'react';
import { useEffect } from 'react';
import { Nav } from '../UI/Nav';
import Burger from '../UI/Navigation/Burger';
import { NavLink } from '../UI/NavLink';
import { NavList } from '../UI/NavList';
import Logo2 from './images/Logo2';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const changeColor = () => {
    if (window.pageYOffset > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeColor);
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  return (
    <Nav>
      <a href="#home">
        <Logo2 />
      </a>
      <Burger />
      <NavList isScrolled={isScrolled}>
        <li>
          <NavLink href="#about">About</NavLink>
        </li>
        <li>
          <NavLink href="#skillset">Skillset</NavLink>
        </li>
        <li>
          <NavLink href="#work">Work</NavLink>
        </li>
        <li>
          <NavLink href="#contacts">Contact</NavLink>
        </li>
      </NavList>
    </Nav>
  );
}
