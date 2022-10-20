import { Frame } from '../UI/About/Frame';
import { FrameBottom } from '../UI/About/FrameBottom';
import { Box } from '../UI/PaigeTwo/Box';
import { BoxContainer } from '../UI/PaigeTwo/BoxContainer';
import { Container } from '../UI/PaigeTwo/Container';
import { motion } from 'framer-motion';
import { Headline } from '../UI/PaigeTwo/Headline';
import { HeadlineBox } from '../UI/PaigeTwo/HeadlineBox';
import HtmlSvg from '../UI/PaigeTwo/SVGs/HtmlSvg';
import CssSvg from '../UI/PaigeTwo/SVGs/CssSvg';
import { InfoBox } from '../UI/PaigeTwo/InfoBox';

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
      duration: 1,
      delay: 0.5,
    },
  },
};
const listItem1 = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      duration: 1.2,
      delay: 0.5,
    },
  },
};
const listItem2 = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      duration: 1.2,
      delay: 0.7,
    },
  },
};
const listItem3 = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      duration: 1.2,
      delay: 0.9,
    },
  },
};

const listItem4 = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      duration: 1.2,
      delay: 1.1,
    },
  },
};

export default function PageTwo() {
  return (
    <Container id="skillset">
      <HeadlineBox>
        <Headline
          viewport={{ once: true }}
          as={motion.h3}
          variants={subItem}
          initial="hidden"
          whileInView="show"
        >
          2. Skillset
        </Headline>
      </HeadlineBox>
      <BoxContainer>
        <Frame />
        <Box
          viewport={{ once: true }}
          as={motion.div}
          variants={item}
          initial="hidden"
          whileInView="show"
        >
          <Frame />
          <motion.section
            viewport={{ once: true }}
            variants={text}
            initial="hidden"
            whileInView="show"
          >
            <HtmlSvg />
            <CssSvg />
          </motion.section>
          <InfoBox>
            <section>
              <h3>HTML & CSS</h3>
              <ul type="list">
                <motion.li
                  variants={listItem1}
                  initial="hidden"
                  whileInView="show"
                >
                  Accessibility (a11y)
                </motion.li>
                <motion.li
                  variants={listItem2}
                  initial="hidden"
                  whileInView="show"
                >
                  Clean Code
                </motion.li>
                <motion.li
                  variants={listItem3}
                  initial="hidden"
                  whileInView="show"
                >
                  Responsive Design
                </motion.li>
                <motion.li
                  variants={listItem4}
                  initial="hidden"
                  whileInView="show"
                >
                  Semantic HTML
                </motion.li>
              </ul>
            </section>
          </InfoBox>
        </Box>
        <Box
          viewport={{ once: true }}
          as={motion.div}
          variants={item}
          initial="hidden"
          whileInView="show"
          transition={{
            type: 'spring',
            duration: 1.6,
          }}
        >
          <motion.p
            viewport={{ once: true }}
            variants={text}
            initial="hidden"
            whileInView="show"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            excepturi?
          </motion.p>
          <InfoBox>
            <p> lorem10</p>
          </InfoBox>
        </Box>
        <Box
          viewport={{ once: true }}
          as={motion.div}
          variants={item}
          initial="hidden"
          whileInView="show"
        >
          <motion.p
            viewport={{ once: true }}
            variants={text}
            initial="hidden"
            whileInView="show"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            excepturi?
          </motion.p>
          <InfoBox>
            <p> lorem10</p>
          </InfoBox>
        </Box>
        <Box
          viewport={{ once: true }}
          as={motion.div}
          variants={item}
          initial="hidden"
          whileInView="show"
        >
          <FrameBottom />
          <motion.p
            viewport={{ once: true }}
            variants={text}
            initial="hidden"
            whileInView="show"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            excepturi?
          </motion.p>
          <InfoBox>
            <p> lorem10</p>
          </InfoBox>
        </Box>
      </BoxContainer>
    </Container>
  );
}
