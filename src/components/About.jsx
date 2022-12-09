import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { AboutBox } from '../UI/About/AboutBox';
import { AboutImage } from '../UI/About/AboutImage';
import { AboutImageBox } from '../UI/About/AboutImageBox';
import { AboutText } from '../UI/About/AboutText';

import { BreakLine } from '../UI/About/BreakLine';
import { Container } from '../UI/About/Container';
import DotGRid from '../UI/About/DotGrid';

import { Headline } from '../UI/About/Headline';
import { HeadlineBox } from '../UI/About/HeadlineBox';

import { Wrapper } from '../UI/About/Wrapper';
// import { BlurDiv } from '../UI/BlurDiv';

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
// const subItem = {
//   hidden: { opacity: 0, y: 20 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: 'spring',
//       duration: 1.3,
//       delay: 0.5,
//     },
//   },
// };
const text = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,

    transition: {
      type: 'spring',
      duration: 1.3,
      delay: 0.7,
    },
  },
};

export default function About() {
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
    <Wrapper
      id="about"
      // style={
      //   offsetY > 700
      //     ? { backgroundColor: `rgba(39, 44, 57, ${offsetY * 0.00022})` }
      //     : { backgroundColor: `rgb(220, 220, 220)` }
      // }
    >
      {/* <BackgroundBox
        style={{ backgroundColor: `rgba(39, 44, 57,
          rgb(39, 44, 57) ${offsetY * 0.0002})` }}
      /> */}
      <Container
        viewport={{ once: true }}
        as={motion.section}
        variants={item}
        initial="hidden"
        whileInView="show"
      >
        <DotGRid />
        {/* <Frame /> */}
        <BreakLine />
        <HeadlineBox>
          <span>01</span>
          {/* <TopLine /> */}

          <Headline>About Me</Headline>
        </HeadlineBox>

        <AboutImageBox>
          <AboutImage id="profileImage" src="ProfileBlub.png" alt="profile" />
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
              rgba(102, 103, 171, ${offsetY * 0.0008}) ${offsetY * 0.025}%,
              rgba(226, 97, 190, ${offsetY * 0.0008}) ${offsetY * 0.075}%,
              rgba(25, 29, 36, ${offsetY * 0.0015}) ${offsetY * 0.115}%)`,
            }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga quia
            totam veritatis itaque debitis dolores qui, accusantium quibusdam
            amet officia explicabo et expedita sit velit veniam rem
            necessitatibus temporibus eos! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Fuga quia totam veritatis itaque
            debitis dolores qui, accusantium quibusdam amet officia explicabo et
            expedita sit velit veniam rem necessitatibus temporibus eos!
            consectetur adipisicing elit.
          </AboutText>
        </AboutBox>
      </Container>
      {/* <BlurDiv
        width="10rem"
        height="10rem"
        bottom="-2%"
        right="-1%"
        opacity="0.4"
      />
      <BlurDiv width="8rem" height="8rem" top="6%" right="11%" zIndex="-1" />
      <BlurDiv
        width="18rem"
        height="5rem"
        bottom="10%"
        left="11%"
        zIndex="-1"
      /> */}
    </Wrapper>
  );
}
