import { motion } from 'framer-motion';
import useBearStore from '../lib/useStore';
import { ImageItem } from '../UI/SkillSet/ImageItem';
import { GenericPng } from '../UI/SkillSet/PNG/GenericPng';

const grid = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      type: 'spring',
    },
  },
};

export default function GridItem({ imageUrl, clicked, id }) {
  const clickFalse = useBearStore(state => state.clickFalse);
  const clickTrue = useBearStore(state => state.clickTrue);

  return (
    <ImageItem
      as={motion.div}
      variants={grid}
      onClick={() => {
        clicked ? clickFalse(id) : clickTrue(id);
      }}
      style={{
        boxShadow: clicked
          ? 'inset -6px -6px 10px rgba(12, 12, 12, 0.557), inset 6px 6px 10px rgba(220, 220, 220, 0.2)'
          : '',
      }}
    >
      {clicked ? (
        <span>
          <GenericPng src={imageUrl} alt="" style={{ scale: '0.9' }} />
        </span>
      ) : (
        <GenericPng src={imageUrl} alt="" />
      )}
    </ImageItem>
  );
}
