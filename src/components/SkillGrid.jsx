import { motion } from 'framer-motion';
import useBearStore from '../lib/useStore';

import { ImageGrid } from '../UI/SkillSet/ImageGrid';

import GridItem from './GridItem';

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

  return (
    <ImageGrid
      as={motion.section}
      viewport={{ once: true }}
      variants={variants}
      initial="hidden"
      whileInView="show"
    >
      {skills.map(skill => (
        <GridItem
          variants={grid}
          key={skill.id}
          id={skill.id}
          clicked={skill.clicked}
          imageUrl={skill.imageUrl}
        ></GridItem>
      ))}
    </ImageGrid>
  );
}
