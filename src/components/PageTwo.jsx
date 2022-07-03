import { Frame } from '../UI/About/Frame';
import { FrameBottom } from '../UI/About/FrameBottom';
import { Box } from '../UI/PaigeTwo/Box';
import { BoxContainer } from '../UI/PaigeTwo/BoxContainer';
import { Container } from '../UI/PaigeTwo/Container';
import { motion } from 'framer-motion';
import { Headline } from '../UI/PaigeTwo/Headline';

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

export default function PageTwo() {
  return (
    <Container id="skillset">
      <BoxContainer>
        <Headline
          viewport={{ once: true }}
          as={motion.h3}
          variants={subItem}
          initial="hidden"
          whileInView="show"
        >
          2. Skillset
        </Headline>
        <Box
          viewport={{ once: true }}
          as={motion.div}
          variants={item}
          initial="hidden"
          whileInView="show"
        >
          <Frame />
          <motion.p
            viewport={{ once: true }}
            variants={text}
            initial="hidden"
            whileInView="show"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            excepturi?
          </motion.p>
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
        </Box>
      </BoxContainer>
    </Container>
  );
}
