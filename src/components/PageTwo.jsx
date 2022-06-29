import { Frame } from '../UI/About/Frame';
import { FrameBottom } from '../UI/About/FrameBottom';
import { Box } from '../UI/PaigeTwo/Box';
import { BoxContainer } from '../UI/PaigeTwo/BoxContainer';
import { Container } from '../UI/PaigeTwo/Container';

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: 'easeInOut',
      duration: 0.8,
    },
  },
};

export default function PageTwo() {
  return (
    <Container id="skillset">
      <BoxContainer
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <Box variants={item} initial="hidden" animate="show">
          <Frame />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            excepturi?
          </p>
        </Box>
        <Box variants={item}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            excepturi?
          </p>
        </Box>
        <Box variants={item}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            excepturi?
          </p>
        </Box>
        <Box variants={item}>
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
