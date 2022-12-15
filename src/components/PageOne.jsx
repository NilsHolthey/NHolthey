import { ImageContainer } from '../UI/ImageContainer';
import { ProfileContainer } from '../UI/ProfileContainer';

import { ProfileWrapper } from '../UI/Profilewrapper';
import { TextContainer } from '../UI/TextContainer';
import Navbar from './Navbar';

import { useEffect } from 'react';
import TexBoxHook from './TextBoxhook';

import ProfileImg from './ProfileImg';
import ShadowBox from './ShadowBox';

import DevImage from './DevImage';

export default function MainBg() {
  const changeColor = () => {
    if (window.scrollY > 50) {
      changeToHidden();
    } else {
      resetDisply();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', function () {
      changeColor();
    });

    return () => {
      window.removeEventListener('scroll', changeColor);
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
