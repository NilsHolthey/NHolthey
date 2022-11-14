import { motion } from 'framer-motion';
// import { useEffect } from 'react';
// import { useState } from 'react';
import { Container } from '../UI/Contact/Container';
import { Footer } from '../UI/Contact/Footer';
import { Form } from '../UI/Contact/Form';

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
