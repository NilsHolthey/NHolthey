import { motion } from 'framer-motion';
import useBearStore from '../lib/useStore';
// import { BinarySpan } from '../UI/SkillSet/BinarySpan';
import { ImageGrid } from '../UI/SkillSet/ImageGrid';
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

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.1,
      type: 'spring',
    },
  },
};

export default function SkillGrid() {
  const skills = useBearStore(state => state.skills);
  const clickFalse = useBearStore(state => state.clickFalse);
  const clickTrue = useBearStore(state => state.clickTrue);

  //   const notClicked = skills.filter(skill => skill.isClicked == false);

  //   const clicked = skills.filter(skill => skill.isClicked == true);
  return (
    <ImageGrid
      as={motion.section}
      viewport={{ once: true }}
      variants={variants}
      initial="hidden"
      whileInView="show"
    >
      {skills.map(skill => (
        <motion.div
          variants={grid}
          key={skill.id}
          id={skill.id}
          isClicked={skill.isClicked}
          imageUrl={skill.imageUrl}
          onClick={() => {
            skill.isClicked ? clickFalse(skill.id) : clickTrue(skill.id);
          }}
          style={{
            boxShadow: skill.isClicked
              ? 'inset -6px -6px 10px rgba(12, 12, 12, 0.557), inset 6px 6px 10px rgba(220, 220, 220, 0.2)'
              : '',
          }}
        >
          {skill.isClicked ? (
            <span>
              <GenericPng
                src={skill.imageUrl}
                alt=""
                style={{ scale: '0.9' }}
              />
            </span>
          ) : (
            <GenericPng src={skill.imageUrl} alt="" />
          )}
        </motion.div>
      ))}
    </ImageGrid>
  );
}
