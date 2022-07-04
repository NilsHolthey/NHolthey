import { motion } from 'framer-motion';
import { Container } from '../UI/Contact/Container';
import { Footer } from '../UI/Contact/Footer';
import { Form } from '../UI/Contact/Form';
import { Frame } from '../UI/Contact/Frame';
import { FrameBottom } from '../UI/Contact/FrameBottom';
import { Headline } from '../UI/Contact/Headline';
import { HeadlineBox } from '../UI/Contact/HeadlineBox';
import LogoForm from '../UI/Contact/LogoForm';
import { Wrapper } from '../UI/Contact/Wrapper';

const item = {
  hidden: { opacity: 0, y: 70 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 1.6,
    },
  },
};

const subItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 0.8,
    y: 0,
    transition: {
      type: 'spring',
      duration: 1.3,
      delay: 0.5,
    },
  },
};
export default function Contact() {
  return (
    <Wrapper id="contacts">
      <LogoForm />
      <Container>
        <Form
          viewport={{ once: true }}
          as={motion.form}
          variants={item}
          initial="hidden"
          whileInView="show"
        >
          <HeadlineBox>
            <Headline
              viewport={{ once: true }}
              as={motion.h3}
              variants={subItem}
              initial="hidden"
              whileInView="show"
            >
              3. Contact Me
            </Headline>
          </HeadlineBox>
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
