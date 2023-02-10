import { ImageContainer } from '../UI/ImageContainer';
import { ProfileContainer } from '../UI/ProfileContainer';

import { ProfileWrapper } from '../UI/Profilewrapper';
import { TextContainer } from '../UI/TextContainer';
import Navbar from './Navbar';

import ProfileImg from './ProfileImg';
// import ShadowBox from './ShadowBox';

import DevImage from './DevImage';
import { ArrowDown } from '../UI/ArrowDown';
import SpinnerSvg from './images/SpinnerSvg';
import { useState } from 'react';
import TextBoxPageOne from './TextBoxPageOne';

export default function MainBg({ scrollRef, homeRef }) {
  const [isActive, setIsActive] = useState(false);
  // const element = document.getElementById('about');
  const handleclick = () => {
    setIsActive(true);
    setTimeout(function () {
      scrollRef.current.scrollIntoView();
      setTimeout(() => setIsActive(false), 1000);
    }, 750);
  };

  return (
    <>
      {/* <ShadowBox /> */}
      <ProfileWrapper id="home" ref={homeRef}>
        <Navbar homeRef={homeRef} />
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
            <TextBoxPageOne />
          </TextContainer>
          <ImageContainer>
            <ProfileImg />
          </ImageContainer>
        </ProfileContainer>
      </ProfileWrapper>
    </>
  );
}
