import { Headline } from '../UI/About/Headline';
import { BlurDiv } from '../UI/PrevWork/BlurDiv';
import { HeadlineBox } from '../UI/PrevWork/HeadlineBox';
import { Container } from '../UI/Work/Container';
import { ImageBox } from '../UI/Work/ImageBox';
import { ScreenShot } from '../UI/Work/SreenShot';
import { TextBox } from '../UI/Work/TextBox';
import { Wrapper } from '../UI/Work/Wrapper';

export default function Work() {
  return (
    <Wrapper>
      <Container>
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
        <TextBox>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa porro
            perspiciatis amet dignissimos! In, facere repellendus cum est sit
            eius.
          </p>
        </TextBox>
        <ImageBox>
          <BlurDiv
            width="40%"
            height="80%"
            bottom="10%"
            right="5%"
            opacity="0.6"
            zIndex="0"
          />
          <ScreenShot src="/ScreenShot.png" />
        </ImageBox>
      </Container>
    </Wrapper>
  );
}