import { Container } from '../UI/Contact/Container';
import { Footer } from '../UI/Contact/Footer';
import { Form } from '../UI/Contact/Form';
import { Frame } from '../UI/Contact/Frame';
import { FrameBottom } from '../UI/Contact/FrameBottom';
import { Wrapper } from '../UI/Contact/Wrapper';

export default function Contact() {
  return (
    <Wrapper id="contacts">
      <Container>
        <Form>
          <Frame />
          <FrameBottom />
          <input type="text" />
          <input type="email" />
          <textarea></textarea>
          <button type="submit">send</button>
        </Form>
      </Container>
      <Footer>
        <p>copyright by me</p>
      </Footer>
    </Wrapper>
  );
}
