import { Frame } from '../UI/About/Frame';
import { FrameBottom } from '../UI/About/FrameBottom';
import { Box } from '../UI/PaigeTwo/Box';
import { BoxContainer } from '../UI/PaigeTwo/BoxContainer';
import { Container } from '../UI/PaigeTwo/Container';
import { motion } from 'framer-motion';

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

export default function PageTwo() {
  return (
    <Container id="skillset">
      <BoxContainer>
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
