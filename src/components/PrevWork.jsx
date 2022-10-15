import { Container } from '../UI/PrevWork/Container';
import { StyledVideo } from '../UI/PrevWork/StyledVideo';
import video from '../Video/video.mp4';

export default function PrevWork() {
  return (
    <Container>
      <h3> Capstonproject App DidIt</h3>
      <section>
        <StyledVideo src={video} autoPlay loop muted />
      </section>
    </Container>
  );
}
