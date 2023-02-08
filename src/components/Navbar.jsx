// import { motion } from 'framer-motion';
import { useState } from 'react';
import { useEffect } from 'react';
import { HomeButton } from '../UI/HomeButton';
import { Nav } from '../UI/Nav';
import Burger from '../UI/Navigation/Burger';
import { NavLink } from '../UI/NavLink';
import { NavList } from '../UI/NavList';
import Logo2 from './images/Logo2';

export default function Navbar({ homeRef }) {
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

  const handleClick = () => {
    homeRef.current.scrollIntoView();
  };

  return (
    <Nav>
      <HomeButton onClick={handleClick}>
        <Logo2 />
      </HomeButton>
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
