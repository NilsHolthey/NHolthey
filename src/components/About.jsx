import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { AboutBox } from '../UI/About/AboutBox';
import { AboutImage } from '../UI/About/AboutImage';
import { Container } from '../UI/About/Container';
import DotGRid from '../UI/About/DotGrid';
import { Frame } from '../UI/About/Frame';
import { Headline } from '../UI/About/Headline';

import { Wrapper } from '../UI/About/Wrapper';
// import ShadowBox from './ShadowBox';
// import ShadowBoxBottom from './ShadowBoxBottom';

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
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 1.3,
      delay: 0.5,
    },
  },
};
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
  // const changeSize = () => {
  //   if (window.scrollY > 780) {
  //     changeToFullWidth();
  //   } else {
  //     resetWidth();
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', changeSize);
  //   return () => {
  //     window.removeEventListener('scroll', changeSize);
  //   };
  // }, []);

  // function changeToFullWidth() {
  //   let boxSize = document.getElementById('aboutBox');

  //   boxSize.style.width = '100%';
  //   boxSize.style.bottom = '0';
  //   boxSize.style.right = '0';
  // }
  // function resetWidth() {
  //   let boxSize = document.getElementById('aboutBox');
  //   boxSize.style.width = '60%';
  //   boxSize.style.bottom = '-2rem';
  //   boxSize.style.right = '-2rem';
  // }
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <Wrapper id="about">
      <Container
        viewport={{ once: true }}
        as={motion.section}
        variants={item}
        initial="hidden"
        whileInView="show"
      >
        <DotGRid />
        <Frame />
        <Headline
          viewport={{ once: true }}
          as={motion.h3}
          variants={subItem}
          initial="hidden"
          whileInView="show"
        >
          1. About Me
        </Headline>
        <AboutImage
          id="profileImage"
          style={{ transform: `translateY(-${offsetY * 0.075}px)` }}
          // as={motion.img}
          src="ProfileAboutBig.png"
          alt="profile"
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // transition={{
          //   type: 'spring',
          //   bounce: 0.3,
          //   duration: 3.5,
          // }}
        />
        <AboutBox
          id="aboutBox"
          style={{ transform: `translateY(${offsetY * 0.175}px)` }}
          viewport={{ once: true }}
          as={motion.article}
          variants={subItem}
          initial="hidden"
          whileInView="show"
        >
          {/* <ImageWrapper>
            <AboutImage
              id="profileImage"
              // as={motion.img}
              src="AboutImage.png"
              alt="profile"
              // initial={{ opacity: 0 }}
              // animate={{ opacity: 1 }}
              // transition={{
              //   type: 'spring',
              //   bounce: 0.3,
              //   duration: 3.5,
              // }}
            />
          </ImageWrapper> */}
          {/* <ShadowBoxBottom />
          <ShadowBox /> */}

          <motion.p
            viewport={{ once: true }}
            variants={text}
            initial="hidden"
            whileInView="show"
            // style={{ opacity: `(${offsetY * 0.175})` }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga quia
            totam veritatis itaque debitis dolores qui, accusantium quibusdam
            amet officia explicabo et expedita sit velit veniam rem
            necessitatibus temporibus eos! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Fuga quia totam veritatis itaque
            debitis dolores qui, accusantium quibusdam amet officia explicabo et
            expedita sit velit veniam rem necessitatibus temporibus eos!
            consectetur adipisicing elit.
          </motion.p>
        </AboutBox>
      </Container>
    </Wrapper>
  );
}
