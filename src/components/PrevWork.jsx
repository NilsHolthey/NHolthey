// import { useState } from 'react';
// import { useEffect } from 'react';
import styled from 'styled-components';
import { Headline } from '../UI/About/Headline';
import { HeadlineBox } from '../UI/About/HeadlineBox';
import { BlurDiv } from '../UI/PrevWork/BlurDiv';
// import { BackgroundBox } from '../UI/About/BackgroudBox';
import { Container } from '../UI/PrevWork/Container';
// import { Headline } from '../UI/PrevWork/Headline';
// import { StyledVideo } from '../UI/PrevWork/StyledVideo';
import { VideoBox } from '../UI/PrevWork/VideoBox';
import { Wrapper } from '../UI/PrevWork/Wrapper';
import video from '../Video/video.mp4';

const StyledVideo = styled.video`
  position: absolute;

  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0 0 18px 18px;
  filter: drop-shadow(6px 35px 44px black);
`;

const aspectRatio = 667 / 375;
const phoneSize = 40.6;
const StyledPhoneImg = styled.img`
  position: absolute;
  top: 49%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 45vh;
  height: 110%;
  object-position: center;

  z-index: 30;
`;
const StyledVideoWrapper = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;
  width: ${phoneSize}vh;
  height: ${aspectRatio * phoneSize}vh;
  transform: translate(-50%, -50%);
  border-radius: 0 0 2rem 2rem;
  background: #000;
  box-shadow: 0 0 0 0.05rem hsl(0, 0%, 50%);
  z-index: 1;
  &::before {
    content: '';
    position: absolute;
    z-index: 1;
    right: 0;
    bottom: 100%;
    left: 0;
    height: 5%;
    margin-bottom: -0.4%;
    border-radius: 2rem 2rem 0 0;
    background: var(--theme-color, white);
  }
`;

export default function PrevWork() {
  // const [offsetY, setOffsetY] = useState(0);
  // const handleScroll = () => setOffsetY(window.pageYOffset);

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);

  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);
  return (
    <Container
    // style={{ backgroundColor: `rgba(39, 44, 57, ${offsetY * 0.00022})` }}
    >
      {/* <Headline>3. My Work</Headline>
      <h3> Capstonproject App DidIt</h3> */}
      <Wrapper>
        <HeadlineBox>
          <span>03</span>
          {/* <TopLine /> */}

          <Headline
          // viewport={{ once: true }}
          // as={motion.h3}
          // variants={subItem}
          // initial="hidden"
          // whileInView="show"
          >
            My Work
          </Headline>
        </HeadlineBox>

        <VideoBox>
          <BlurDiv
            width="100%"
            height="120%"
            bottom="-8%"
            right="-15%"
            opacity=".9"
            zIndex="1"
          />
          <StyledVideoWrapper style={{ backgroundColor: 'transparent' }}>
            <StyledVideo autoPlay loop muted>
              <source src={video} type="video/mp4" />
            </StyledVideo>
          </StyledVideoWrapper>
          <StyledPhoneImg src="ScaledPhone1.png" layout="fill" />
        </VideoBox>
      </Wrapper>
    </Container>
  );
}
