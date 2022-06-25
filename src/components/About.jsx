import { AboutBox } from '../UI/About/AboutBox';
import { Container } from '../UI/About/Container';
import DotGRid from '../UI/About/DotGrid';
import { Frame } from '../UI/About/Frame';
import { Headline } from '../UI/About/Headline';
import { Wrapper } from '../UI/About/Wrapper';

export default function About() {
  return (
    <Wrapper>
      <Container>
        <DotGRid />
        <Frame />
        <Headline>1. About Me</Headline>

        <AboutBox>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga quia
          totam veritatis itaque debitis dolores qui, accusantium quibusdam amet
          officia explicabo et expedita sit velit veniam rem necessitatibus
          temporibus eos!
        </AboutBox>
      </Container>
    </Wrapper>
  );
}
