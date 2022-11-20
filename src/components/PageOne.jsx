import { ImageContainer } from '../UI/ImageContainer';
import { ProfileContainer } from '../UI/ProfileContainer';
import { ProfileImage } from '../UI/ProfileImage';
import { ProfileWrapper } from '../UI/Profilewrapper';
import { TextContainer } from '../UI/TextContainer';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import TexBoxHook from './TextBoxhook';
import { DevImg } from '../UI/DevImg';

export default function MainBg() {
  const changeColor = () => {
    if (window.scrollY > 150) {
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
    myNav.style.transition = 'opacity 2s ease';
  }
  function resetDisply() {
    let myNav = document.getElementById('profileImage');

    myNav.style.opacity = '1';
  }

  return (
    <ProfileWrapper id="home">
      <Navbar />

      <DevImg
        id="devImg"
        src="DEVELOPER.png"
        as={motion.img}
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 0.05 }}
        transition={{
          type: 'spring',
          bounce: 0.2,
          duration: 2,
        }}
      />
      <ProfileContainer>
        <TextContainer>
          <TexBoxHook />
        </TextContainer>
        <ImageContainer>
          <ProfileImage
            id="profileImage"
            as={motion.img}
            src="ProfilegreyResize.png"
            alt="profile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            transition={{
              type: 'spring',
              bounce: 0.2,
              duration: 2,
            }}
          />
        </ImageContainer>
      </ProfileContainer>
    </ProfileWrapper>
  );
}
