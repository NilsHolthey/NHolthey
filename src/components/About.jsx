import { motion } from 'framer-motion';
import { AboutBox } from '../UI/About/AboutBox';
import { AboutImage } from '../UI/About/AboutImage';
import { Container } from '../UI/About/Container';
import DotGRid from '../UI/About/DotGrid';
import { Frame } from '../UI/About/Frame';
import { Headline } from '../UI/About/Headline';
import { Wrapper } from '../UI/About/Wrapper';
import ShadowBox from './ShadowBox';

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
          as={motion.img}
          src="AboutImage.png"
          alt="profile"
          initial={{ opacity: 0, x: 190 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: 'spring',
            bounce: 0.3,
            duration: 3.5,
          }}
        />
        <AboutBox
          viewport={{ once: true }}
          as={motion.article}
          variants={subItem}
          initial="hidden"
          whileInView="show"
        >
          <ShadowBox />
          <motion.p
            viewport={{ once: true }}
            variants={text}
            initial="hidden"
            whileInView="show"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga quia
            totam veritatis itaque debitis dolores qui, accusantium quibusdam
            amet officia explicabo et expedita sit velit veniam rem
            necessitatibus temporibus eos! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Fuga quia totam veritatis itaque
            debitis dolores qui, accusantium quibusdam amet officia explicabo et
            expedita sit velit veniam rem necessitatibus temporibus eos!
            consectetur adipisicing elit. Fuga quia totam veritatis itaque
            debitis dolores qui, accusantium quibusdam amet officia explicabo et
            expedita sit velit veniam rem necessitatibus temporibus eos!
          </motion.p>
        </AboutBox>
      </Container>
    </Wrapper>
  );
}
