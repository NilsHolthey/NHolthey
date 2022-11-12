import { Container } from '../UI/Work/Container';
import { ImageBox } from '../UI/Work/ImageBox';
import { ScreenShot } from '../UI/Work/SreenShot';
import { TextBox } from '../UI/Work/TextBox';
import { Wrapper } from '../UI/Work/Wrapper';

export default function Work() {
  return (
    <Wrapper>
      <Container>
        <TextBox></TextBox>
        <ImageBox>
          <ScreenShot src="/ScreenShot.png" />
        </ImageBox>
      </Container>
    </Wrapper>
  );
}
