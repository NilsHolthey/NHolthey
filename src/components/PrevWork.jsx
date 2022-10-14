import { Container } from '../UI/PrevWork/Container';
import video from '../Video/video.mp4';

export default function PrevWork() {
  return (
    <Container>
      <h3> Capstonproject App DidIt</h3>
      <section>
        <video src={video} width="375" height="667" autoPlay loop muted />
      </section>
    </Container>
  );
}
