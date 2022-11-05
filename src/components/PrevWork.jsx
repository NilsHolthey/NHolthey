import { useState } from 'react';
import { useEffect } from 'react';
// import { BackgroundBox } from '../UI/About/BackgroudBox';
import { Container } from '../UI/PrevWork/Container';
import { Headline } from '../UI/PrevWork/Headline';
import { StyledVideo } from '../UI/PrevWork/StyledVideo';
import { VideoBox } from '../UI/PrevWork/VideoBox';
import { Wrapper } from '../UI/PrevWork/Wrapper';
import video from '../Video/video.mp4';

export default function PrevWork() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <Container
      style={{ backgroundColor: `rgba(39, 44, 57, ${offsetY * 0.00022})` }}
    >
      {/* <BackgroundBox
        style={{ backgroundColor: `rgba(39, 44, 57, ${offsetY * 0.0002})` }}
      /> */}
      <Wrapper>
        <Headline>3. My Work</Headline>
        <h3> Capstonproject App DidIt</h3>
        <VideoBox>
          <StyledVideo src={video} autoPlay loop muted />
        </VideoBox>
      </Wrapper>
    </Container>
  );
}
