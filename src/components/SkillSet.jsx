import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useState } from 'react';
import { Headline } from '../UI/About/Headline';
import { BreakLine } from '../UI/SkillSet/BreakLine';
import { Container } from '../UI/SkillSet/Container';
import { HeadlineBox } from '../UI/About/HeadlineBox';
import { Wrapper } from '../UI/SkillSet/Wrapper';
import { ArrowDown } from '../UI/ArrowDown';
import SkillGrid from './SkillGrid';
import TextGrid from './TextGrid';
import { ContainerBorder } from '../UI/SkillSet/ContainerBorder';

const item = {
  hidden: { opacity: 0, y: 90 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 1.8,
    },
  },
};

const icon = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,

    transition: {
      type: 'spring',
      duration: 2.3,
      delay: 1.2,
    },
  },
};

export default function Skillset({ skillRef, workRef }) {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll('.container');
    const wrapper = document.querySelector('.wrapper');
    wrapper.addEventListener('mousemove', function ($event) {
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = $event.clientX - rect.left;
        const y = $event.clientY - rect.top;

        card.style.setProperty('--xPos', `${x}px`);
        card.style.setProperty('--yPos', `${y}px`);
      });
    });

    return () =>
      wrapper.removeEventListener('mousemove', function ($event) {
        cards.forEach(card => {
          const rect = card.getBoundingClientRect();
          const x = $event.clientX - rect.left;
          const y = $event.clientY - rect.top;

          card.style.setProperty('--xPos', `${x}px`);
          card.style.setProperty('--yPos', `${y}px`);
        });
      });
  }, []);

  const handleClick = () => {
    workRef.current.scrollIntoView();
  };

  return (
    <Wrapper id="skillset" ref={skillRef} className="wrapper">
      <Container
        className="container"
        viewport={{ once: true }}
        as={motion.section}
        variants={item}
        initial="hidden"
        whileInView="show"
      >
        <ContainerBorder>
          <ArrowDown
            href="#work"
            onClick={handleClick}
            bottom="0"
            right="50%"
            Background="  rgb(39, 44, 57)"
            BorderColor=" rgb(39, 44, 57)"
            OutlineColor=" rgb(39, 44, 57)"
          >
            <motion.span
              className="material-symbols-outlined"
              viewport={{ once: true }}
              variants={icon}
              initial="hidden"
              whileInView="show"
            >
              arrow_downward
            </motion.span>
          </ArrowDown>
          <HeadlineBox>
            <span>02</span>

            <Headline>Skill Set</Headline>
          </HeadlineBox>
          <TextGrid offsetY={offsetY} />
          <SkillGrid />
          <BreakLine />
        </ContainerBorder>
      </Container>
    </Wrapper>
  );
}
