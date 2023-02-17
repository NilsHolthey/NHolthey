import { motion } from 'framer-motion';
import useBearStore from '../lib/useStore';
import { Text } from '../UI/SkillSet/Text';
import { TextBox } from '../UI/SkillSet/TextBox';
import { BinarySpan } from '../UI/SkillSet/BinarySpan';
import { TextSpan } from '../UI/SkillSet/TextSpan';

const text = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 1.2,
      delay: 0.6,
    },
  },
};

export default function TextGrid({ offsetY }) {
  const skills = useBearStore(state => state.skills);

  return (
    <TextBox
      id="textBox"
      style={{
        background: `radial-gradient(circle, #e261bd70 0%, rgba(39, 44, 57, 0)  ${
          offsetY * 0.03
        }%)`,
      }}
    >
      <Text
        as={motion.div}
        viewport={{ once: true }}
        variants={text}
        initial="hidden"
        whileInView="show"
      >
        {skills.map(skill => {
          return (
            <span
              key={skill.id}
              id={skill.id}
              clicked={skill.clicked.toString()}
              binary={skill.binary}
              name={skill.name}
            >
              {skill.clicked ? (
                <TextSpan>{skill.name}&nbsp;|&nbsp;</TextSpan>
              ) : (
                <BinarySpan>{skill.binary}</BinarySpan>
              )}
            </span>
          );
        })}
      </Text>
    </TextBox>
  );
}
