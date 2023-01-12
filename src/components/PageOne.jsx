import { ImageContainer } from '../UI/ImageContainer';
import { ProfileContainer } from '../UI/ProfileContainer';
// import { motion } from 'framer-motion';
import { ProfileWrapper } from '../UI/Profilewrapper';
import { TextContainer } from '../UI/TextContainer';
import Navbar from './Navbar';

import { useEffect } from 'react';
import TexBoxHook from './TextBoxhook';

import ProfileImg from './ProfileImg';
import ShadowBox from './ShadowBox';

import DevImage from './DevImage';
import { ArrowDown } from '../UI/ArrowDown';
import SpinnerSvg from './images/SpinnerSvg';
import { useState } from 'react';

// const icon = {
//   hidden: { opacity: 0, y: 30 },
//   show: {
//     opacity: 1,
//     y: 0,

//     transition: {
//       type: 'spring',
//       duration: 2.3,
//       delay: 1.2,
//     },
//   },
// };

export default function MainBg() {
  const [isActive, setIsActive] = useState(false);

  const handleclick = () => {
    setIsActive(true);
    setTimeout(function () {
      location.href = '#about';
      setTimeout(() => setIsActive(false), 1000);
    }, 750);
  };

  const changeOpacity = () => {
    if (window.scrollY > 50) {
      changeToHidden();
    } else {
      resetDisply();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', function () {
      changeOpacity();
    });

    return () => {
      window.removeEventListener('scroll', changeOpacity);
    };
  }, []);

  function changeToHidden() {
    let myNav = document.getElementById('profileImage');

    myNav.style.opacity = '0';
    myNav.style.transition = 'opacity 1.1s ease';
  }
  function resetDisply() {
    let myNav = document.getElementById('profileImage');

    myNav.style.opacity = '1';
  }

  return (
    <ProfileWrapper id="home">
      <ShadowBox />
      <Navbar />
      <DevImage />
      <ArrowDown
        onClick={handleclick}
        bottom="10%"
        right="50%"
        BorderColor="none"
        OutlineColor="#none"
        Background="transparent"
      >
        <SpinnerSvg isActive={isActive} />
      </ArrowDown>
      <ProfileContainer>
        <TextContainer>
          <TexBoxHook />
        </TextContainer>
        <ImageContainer>
          <ProfileImg />
        </ImageContainer>
      </ProfileContainer>
    </ProfileWrapper>
  );
}
