import { motion } from 'framer-motion';
// import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { AboutBox } from '../UI/About/AboutBox';
import { AboutImage } from '../UI/About/AboutImage';
import { AboutImageBox } from '../UI/About/AboutImageBox';
import { AboutText } from '../UI/About/AboutText';

import { BreakLine } from '../UI/About/BreakLine';
import { Container } from '../UI/About/Container';
import { ContainerBorder } from '../UI/About/ContainerBorder';

import { Headline } from '../UI/About/Headline';
import { HeadlineBox } from '../UI/About/HeadlineBox';

import { Wrapper } from '../UI/About/Wrapper';
import { ArrowDown } from '../UI/ArrowDown';

const item = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 1.6,
      delay: 0.7,
    },
  },
};

const text = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,

    transition: {
      type: 'spring',
      duration: 1.3,
      delay: 1.2,
    },
  },
};
const icon = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,

    transition: {
      type: 'spring',
      duration: 2.3,
      delay: 1.2,
    },
  },
};
const button = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      type: 'spring',
      duration: 2.8,
      delay: 1.7,
    },
  },
};

export default function About({ aboutRef, skillRef }) {
  // const cards = document.querySelectorAll('.card');
  // const wrapper = document.querySelector('.cards');

  var dob = new Date('09/23/1984');
  var month_diff = Date.now() - dob.getTime();
  var age_dt = new Date(month_diff);
  var year = age_dt.getUTCFullYear();
  const age = Math.abs(year - 1970);

  const { ref, inView: visible } = useInView({
    threshold: 0.8,
    triggerOnce: false,
  });
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () =>
    setOffsetY((window.pageYOffset / window.innerHeight) * 1000);

  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    const wrapper = document.querySelector('.cards');
    wrapper.addEventListener('mousemove', function ($event) {
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = $event.clientX - rect.left;
        const y = $event.clientY - rect.top;

        card.style.setProperty('--xPos', `${x}px`);
        card.style.setProperty('--yPos', `${y}px`);
      });
    });

    return () =>
      wrapper.removeEventListener('mousemove', function ($event) {
        cards.forEach(card => {
          const rect = card.getBoundingClientRect();
          const x = $event.clientX - rect.left;
          const y = $event.clientY - rect.top;

          card.style.setProperty('--xPos', `${x}px`);
          card.style.setProperty('--yPos', `${y}px`);
        });
      });
  }, []);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // const myRef = useRef(null);
  const handleClick = () => {
    skillRef.current.scrollIntoView();
  };

  return (
    <Wrapper id="about" ref={aboutRef} className="cards">
      <Container
        className="card"
        viewport={{ once: true }}
        as={motion.section}
        variants={item}
        initial="hidden"
        whileInView="show"
      >
        <ContainerBorder>
          <ArrowDown
            href="#skillset"
            onClick={handleClick}
            bottom="0"
            right="50%"
            Background=" rgba(25, 29, 36, 0.965)"
            BorderColor="rgba(25, 29, 36, 0.965)"
            OutlineColor="rgba(25, 29, 36, 0.965)"
            as={motion.button}
            viewport={{ once: true }}
            variants={button}
            initial="hidden"
            whileInView="show"
          >
            <motion.span
              className="material-symbols-outlined"
              viewport={{ once: true }}
              variants={icon}
              initial="hidden"
              whileInView="show"
            >
              arrow_downward
            </motion.span>
          </ArrowDown>

          <BreakLine />
          <HeadlineBox>
            <span>01</span>

            <Headline>About Me</Headline>
          </HeadlineBox>

          <AboutImageBox>
            <AboutImage
              as={motion.img}
              viewport={{ once: true }}
              variants={icon}
              initial="hidden"
              whileInView="show"
              ref={ref}
              id="profileImage"
              visible={visible}
              src="ProfileBlub.png"
              alt="profile"
            />
          </AboutImageBox>
          <AboutBox id="aboutBox">
            <AboutText
              as={motion.div}
              viewport={{ once: true }}
              variants={text}
              initial="hidden"
              whileInView="show"
              style={{
                backgroundImage: `linear-gradient(350deg,
              rgba(102, 103, 171, ${offsetY * 0.0008}) ${offsetY * 0.035}%,
              rgba(226, 97, 190, ${offsetY * 0.0008}) ${offsetY * 0.075}%,
              rgba(25, 29, 36, ${offsetY * 0.0015}) ${offsetY * 0.125}%)`,
              }}
            >
              <p>Hello World,</p>
              <p>
                I&apos;m Nils, {age} years old, creative front-end developer
                with a passion for design and technology. I have always been
                fascinated with the intersection of aesthetics and
                functionality, which is why I was driven to pursue a career in
                web development. Through my 570-hour bootcamp, I honed the base
                of my skills in coding and the ability to turn complex concepts
                into clean, visually appealing designs. <br></br>
                <br></br>I believe that great design can be achieved through a
                combination of analytic thinking and creative expression, and I
                am always seeking new challenges to push my skills further.{' '}
                <br></br>
                <br></br>In my work, I strive to bring clarity and simplicity to
                complex ideas, and I am dedicated to finding the right balance
                between form and function. Whether working on a website or an
                application, my goal is to create user-friendly experiences that
                leave a lasting impression.
              </p>
            </AboutText>
          </AboutBox>
        </ContainerBorder>
      </Container>
    </Wrapper>
  );
}
