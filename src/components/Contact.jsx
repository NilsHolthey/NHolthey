import { motion } from 'framer-motion';
// import { useEffect } from 'react';
// import { useState } from 'react';
import { Container } from '../UI/Contact/Container';
import { Footer } from '../UI/Contact/Footer';
import { Form } from '../UI/Contact/Form';
import { Frame } from '../UI/Contact/Frame';
import { FrameBottom } from '../UI/Contact/FrameBottom';
import { Headline } from '../UI/Contact/Headline';
import { HeadlineBox } from '../UI/Contact/HeadlineBox';
// import LogoForm from '../UI/Contact/LogoForm';
import { Wrapper } from '../UI/Contact/Wrapper';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

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
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_qi1lc4r',
        'template_nzntalt',
        form.current,
        'K8UPqxtkHCh1EeJSp'
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
  };

  return (
    <Wrapper id="contacts">
      <Container>
        {/* <LogoForm /> */}
        <Form
          ref={form}
          onSubmit={sendEmail}
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
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </Form>
      </Container>
      <Footer>
        <p>copyright by me©</p>
      </Footer>
    </Wrapper>
  );
}
