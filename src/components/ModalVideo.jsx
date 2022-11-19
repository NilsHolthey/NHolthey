// import ReactPlayer from 'react-player';
import { StyledVideo } from '../UI/PrevWork/StyledVideo';
import { PlayerWrapper } from '../UI/Work/PlayerWrapper';
import video from '../Video/video.mp4';

export default function ModalVideo({ handelClick }) {
  return (
    <PlayerWrapper>
      <StyledVideo playsInline autoPlay loop>
        <source src={video} type="video/mp4" />
      </StyledVideo>
      <span className="material-icons" onClick={handelClick}>
        highlight_off
      </span>
    </PlayerWrapper>
  );
}
