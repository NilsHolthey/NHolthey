import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { AboutBox } from '../UI/About/AboutBox';
import { AboutImage } from '../UI/About/AboutImage';
import { AboutImageBox } from '../UI/About/AboutImageBox';
import { AboutText } from '../UI/About/AboutText';

import { BreakLine } from '../UI/About/BreakLine';
import { Container } from '../UI/About/Container';
import DotGRid from '../UI/About/DotGrid';
// import { Frame } from '../UI/About/Frame';
import { Headline } from '../UI/About/Headline';
import { HeadlineBox } from '../UI/About/HeadlineBox';
// import { TopLine } from '../UI/About/TopLine';

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
  console.log(offsetY);
  return (
    <Wrapper
      id="about"
      style={
        offsetY > 700
          ? { backgroundColor: `rgba(39, 44, 57, ${offsetY * 0.00022})` }
          : { backgroundColor: `rgb(220, 220, 220)` }
      }
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

          <Headline
          // viewport={{ once: true }}
          // as={motion.h3}
          // variants={subItem}
          // initial="hidden"
          // whileInView="show"
          >
            About Me
          </Headline>
        </HeadlineBox>

        <AboutImageBox
          style={{ transform: `translateY(-${offsetY * 0.05}px)` }}
        >
          <AboutImage
            id="profileImage"
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
        </AboutImageBox>
        <AboutBox
          id="aboutBox"
          // viewport={{ once: true }}
          // as={motion.article}
          // variants={subItem}
          // initial="hidden"
          // whileInView="show"
          style={{ transform: `translateY(${offsetY * 0.05}px)` }}
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

          <AboutText
            as={motion.p}
            viewport={{ once: true }}
            variants={text}
            initial="hidden"
            whileInView="show"
            style={{
              backgroundImage: `linear-gradient(125deg,
              rgba(102, 103, 171, ${offsetY * 0.001}) 20%,
              rgba(226, 97, 190, ${offsetY * 0.001}) 59%,
              rgba(220, 220, 220, ${offsetY * 0.001}) 90%)`,
            }}
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
          </AboutText>
        </AboutBox>
      </Container>
    </Wrapper>
  );
}
