// import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';
import { StyledVideo } from '../UI/PrevWork/StyledVideo';
import { PlayerWrapper } from '../UI/Work/PlayerWrapper';
import video from '../Video/video.mp4';

const item2 = {
  hidden: { opacity: 0, y: 120 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 2.8,
    },
  },
};

export default function ModalVideo({ handelClick }) {
  return (
    <PlayerWrapper
      viewport={{ once: true }}
      as={motion.section}
      variants={item2}
      initial="hidden"
      whileInView="show"
    >
      <StyledVideo playsInline autoPlay loop>
        <source src={video} type="video/mp4" />
      </StyledVideo>
      <span className="material-icons" onClick={handelClick}>
        highlight_off
      </span>
    </PlayerWrapper>
  );
}
