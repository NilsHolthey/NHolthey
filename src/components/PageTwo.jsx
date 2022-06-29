import { Frame } from '../UI/About/Frame';
import { FrameBottom } from '../UI/About/FrameBottom';
import { Box } from '../UI/PaigeTwo/Box';
import { BoxContainer } from '../UI/PaigeTwo/BoxContainer';
import { Container } from '../UI/PaigeTwo/Container';
import { motion } from 'framer-motion';

const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 1.6,
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            excepturi?
          </p>
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            excepturi?
          </p>
        </Box>
        <Box
          viewport={{ once: true }}
          as={motion.div}
          variants={item}
          initial="hidden"
          whileInView="show"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            excepturi?
          </p>
        </Box>
        <Box
          viewport={{ once: true }}
          as={motion.div}
          variants={item}
          initial="hidden"
          whileInView="show"
        >
          <FrameBottom />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            excepturi?
          </p>
        </Box>
      </BoxContainer>
    </Container>
  );
}
