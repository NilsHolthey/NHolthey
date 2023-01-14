import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { AboutBox } from '../UI/About/AboutBox';
import { AboutImage } from '../UI/About/AboutImage';
import { AboutImageBox } from '../UI/About/AboutImageBox';
import { AboutText } from '../UI/About/AboutText';

import { BreakLine } from '../UI/About/BreakLine';
import { Container } from '../UI/About/Container';

import { Headline } from '../UI/About/Headline';
import { HeadlineBox } from '../UI/About/HeadlineBox';

import { Wrapper } from '../UI/About/Wrapper';
import { ArrowDown } from '../UI/ArrowDown';
// import { ArrowUp } from '../UI/ArrowUp';
// import { SpinnerWrapper } from '../UI/SpinnerWrapper';

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

export default function About() {
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
  const windowRatio = window.pageYOffset / window.innerHeight;
  const handleScroll = () =>
    setOffsetY((window.pageYOffset / window.innerHeight) * 1000);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  console.log(offsetY, window.innerHeight, windowRatio);

  return (
    <Wrapper id="about">
      <Container
        viewport={{ once: true }}
        as={motion.section}
        variants={item}
        initial="hidden"
        whileInView="show"
      >
        <ArrowDown
          href="#skillset"
          bottom="0"
          right="50%"
          Background=" rgba(25, 29, 36, 0.965)"
          BorderColor="rgba(25, 29, 36, 0.965)"
          OutlineColor="rgba(25, 29, 36, 0.965)"
        >
          <div></div>
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
        {/* <ArrowUp
          href="#skillset"
          top="0"
          right="50%"
          Background=" rgba(25, 29, 36, 0.965)"
          BorderColor="rgba(25, 29, 36, 0.965)"
          OutlineColor="rgba(25, 29, 36, 0.965)"
        >
          <SpinnerWrapper>
            <div></div>
            <motion.span className="material-symbols-outlined">
              arrow_downward
            </motion.span>
          </SpinnerWrapper>
        </ArrowUp> */}
        <BreakLine />
        <HeadlineBox>
          <span>01</span>
          {/* <TopLine /> */}
          <div></div>
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
            as={motion.p}
            viewport={{ once: true }}
            variants={text}
            initial="hidden"
            whileInView="show"
            style={{
              backgroundImage: `linear-gradient(350deg,
              rgba(102, 103, 171, ${offsetY * 0.0008}) ${offsetY * 0.035}%,
              rgba(226, 97, 190, ${offsetY * 0.0008}) ${offsetY * 0.055}%,
              rgba(25, 29, 36, ${offsetY * 0.0015}) ${offsetY * 0.125}%)`,
            }}
          >
            Lorem, ipsum dolor {age} years old sit amet consectetur adipisicing
            elit. Fuga quia totam veritatis itaque debitis dolores qui,
            accusantium quibusdam amet officia explicabo et expedita sit velit
            veniam rem necessitatibus temporibus eos! Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Fuga quia totam veritatis itaque
            debitis dolores qui, accusantium quibusdam amet officia explicabo et
            expedita sit velit veniam rem necessitatibus temporibus eos!
            consectetur adipisicing elit.
          </AboutText>
        </AboutBox>
      </Container>
    </Wrapper>
  );
}
