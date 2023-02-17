// import { motion } from 'framer-motion';
import { useState } from 'react';
import { useEffect } from 'react';
import { HomeButton } from '../UI/HomeButton';
import { Nav } from '../UI/Nav';
import Burger from '../UI/Navigation/Burger';
import { NavLink } from '../UI/NavLink';
import { NavList } from '../UI/NavList';
import Logo2 from './images/Logo2';

export default function Navbar({
  homeRef,
  skillRef,
  aboutRef,
  workRef,
  contactRef,
}) {
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

  const scrollToHome = () => {
    homeRef.current.scrollIntoView();
  };

  const scrollToSkill = () => {
    skillRef.current.scrollIntoView();
  };
  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView();
  };
  const scrollToWork = () => {
    workRef.current.scrollIntoView();
  };
  const scrollToContact = () => {
    contactRef.current.scrollIntoView();
  };

  return (
    <Nav>
      <HomeButton onClick={scrollToHome}>
        <Logo2 />
      </HomeButton>
      <Burger
        scrollToSkill={scrollToSkill}
        scrollToHome={scrollToHome}
        scrollToAbout={scrollToAbout}
        scrollToWork={scrollToWork}
        scrollToContact={scrollToContact}
      />
      <NavList isScrolled={isScrolled}>
        <li>
          <NavLink onClick={scrollToAbout}>About</NavLink>
        </li>
        <li>
          <NavLink onClick={scrollToSkill}>Skillset</NavLink>
        </li>
        <li>
          <NavLink onClick={scrollToWork}>Work</NavLink>
        </li>
        <li>
          <NavLink onClick={scrollToContact}>Contact</NavLink>
        </li>
      </NavList>
    </Nav>
  );
}
