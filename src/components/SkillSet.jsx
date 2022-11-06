import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Headline } from '../UI/About/Headline';
import { HeadlineBox } from '../UI/About/HeadlineBox';
// import { TopLine } from '../UI/About/TopLine';
import { Container } from '../UI/SkillSet/Container';
import { Hexagon } from '../UI/SkillSet/Hexagone';
import { CssPng } from '../UI/SkillSet/PNG/Css';
import { HtmlPng } from '../UI/SkillSet/PNG/Html';
import { JsPng } from '../UI/SkillSet/PNG/Js';
import { ReactPng } from '../UI/SkillSet/PNG/React';
import { Text } from '../UI/SkillSet/Text';
import { TextBox } from '../UI/SkillSet/TextBox';
import { Wrapper } from '../UI/SkillSet/Wrapper';

const item = {
  hidden: { opacity: 0, y: 70 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 1.6,
    },
  },
};

const text = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 1,
      delay: 0.5,
    },
  },
};

export default function Skillset() {
  function changeBackgroundHtm() {
    let hex01 = document.getElementById('html');

    hex01.style.transition = 'color 0.1s ease-in-out';
    hex01.style.color = '#6667ab';
  }

  function changeBackgroundBack() {
    let hex01 = document.getElementById('html');
    hex01.style.color = '';
  }
  function changeBackgroundCss() {
    let hex02 = document.getElementById('css');

    hex02.style.transition = 'color 0.1s ease-in-out';
    hex02.style.color = '#6667ab';
  }
  function changeBackgroundCssBack() {
    let hex01 = document.getElementById('css');
    hex01.style.color = '';
  }
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <Wrapper
      style={{ backgroundColor: `rgba(39, 44, 57, ${offsetY * 0.00022})` }}
    >
      <Container
        viewport={{ once: true }}
        as={motion.section}
        variants={item}
        initial="hidden"
        whileInView="show"
      >
        <HeadlineBox>
          <span>03</span>
          {/* <TopLine /> */}

          <Headline>Skills Set</Headline>
        </HeadlineBox>
        <TextBox>
          <Text
            as={motion.p}
            viewport={{ once: true }}
            variants={text}
            initial="hidden"
            whileInView="show"
          >
            <span id="html">HTML</span>,&nbsp;<span id="css">CSS</span>,&nbsp;
            <span> JavaScript</span>,&nbsp;<span>React</span>,&nbsp;
            <span>NodeJS</span>,&nbsp;
            <span> NEXT</span>,&nbsp;<span>Zustand</span>,&nbsp;
            <span>styled-components</span>,&nbsp;<span>MongoDB</span>,&nbsp;
            <span>Git</span>
            ,&nbsp;<span>GitHub</span>,&nbsp;<span>Figma</span>,&nbsp;
            <span>AdobeXD</span>,&nbsp;
            <span>ReactDnD</span>,&nbsp;<span>Rest</span>.
          </Text>
        </TextBox>
        <Hexagon
          id="hex01"
          width="7rem"
          height="7rem"
          duration="8s"
          onMouseEnter={changeBackgroundHtm}
          onMouseLeave={changeBackgroundBack}
          top="1rem"
          right="1rem"
        >
          <HtmlPng src="html5-logo-31813.png"></HtmlPng>
          <div></div>
        </Hexagon>
        <Hexagon
          onMouseEnter={changeBackgroundCss}
          onMouseLeave={changeBackgroundCssBack}
          width="5rem"
          height="5rem"
          duration="6s"
          top="85%"
          right="-3rem"
        >
          <CssPng src="CSS_3.png"></CssPng>
          <div></div>
        </Hexagon>

        <Hexagon
          width="8rem"
          height="8rem"
          duration="7.5s"
          top="11rem"
          right="13rem"
        >
          <ReactPng src="reactLogo.png"></ReactPng>
          <div></div>
        </Hexagon>
        <Hexagon
          width="12rem"
          height="12rem"
          duration="7s"
          top="15rem"
          right="3rem"
        >
          <JsPng src="javascript-39415.png"></JsPng>
          <div></div>
        </Hexagon>
      </Container>
    </Wrapper>
  );
}
