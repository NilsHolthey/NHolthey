import { ImageContainer } from '../UI/ImageContainer';
import { ProfileContainer } from '../UI/ProfileContainer';

import { ProfileWrapper } from '../UI/Profilewrapper';
import { TextContainer } from '../UI/TextContainer';
import Navbar from './Navbar';

import ProfileImg from './ProfileImg';
import ShadowBox from './ShadowBox';

import DevImage from './DevImage';
import { ArrowDown } from '../UI/ArrowDown';
import SpinnerSvg from './images/SpinnerSvg';
import { useState } from 'react';
import TextBoxPageOne from './TextBoxPageOne';

export default function MainBg() {
  const [isActive, setIsActive] = useState(false);

  const handleclick = () => {
    setIsActive(true);
    setTimeout(function () {
      location.href = '#about';
      setTimeout(() => setIsActive(false), 1000);
    }, 750);
  };

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
          <TextBoxPageOne />
        </TextContainer>
        <ImageContainer>
          <ProfileImg />
        </ImageContainer>
      </ProfileContainer>
    </ProfileWrapper>
  );
}
