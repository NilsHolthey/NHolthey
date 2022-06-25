import { Frame } from '../UI/About/Frame';
import { FrameBottom } from '../UI/About/FrameBottom';
import { Box } from '../UI/PaigeTwo/Box';
import { BoxContainer } from '../UI/PaigeTwo/BoxContainer';
import { Container } from '../UI/PaigeTwo/Container';

export default function PageTwo() {
  return (
    <Container id="skillset">
      <BoxContainer>
        <Box>
          <Frame />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            excepturi?
          </p>
        </Box>
        <Box>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            excepturi?
          </p>
        </Box>
        <Box>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            excepturi?
          </p>
        </Box>
        <Box>
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
