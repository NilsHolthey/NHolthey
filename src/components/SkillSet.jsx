import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';
import { Headline } from '../UI/About/Headline';
import { HeadlineBox } from '../UI/About/HeadlineBox';
import { BreakLine } from '../UI/SkillSet/BreakLine';
// import { TopLine } from '../UI/About/TopLine';
import { Container } from '../UI/SkillSet/Container';
import { Hexagon } from '../UI/SkillSet/Hexagone';
import { ImageGrid } from '../UI/SkillSet/ImageGrid';
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
  function moveHtmlLeft() {
    let hexHtml01 = document.getElementById('hex01');
    hexHtml01.style.right = '67.5%';

    hexHtml01.style.borderRadius = '5px';
    hexHtml01.style.width = '15%';
  }
  function moveHtmlRight() {
    let hexHtml01 = document.getElementById('hex01');
    hexHtml01.style.right = '';
    hexHtml01.style.borderRadius = '';
    hexHtml01.style.width = '';
  }
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
  // const [offsetY, setOffsetY] = useState(0);
  // const handleScroll = () => setOffsetY(window.pageYOffset);

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);

  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);
  return (
    <Wrapper
      id="skillset"
      // style={{ backgroundColor: `rgba(39, 44, 57, ${offsetY * 0.00022})` }}
    >
      <Container
        viewport={{ once: true }}
        as={motion.section}
        variants={item}
        initial="hidden"
        whileInView="show"
      >
        <HeadlineBox>
          <span>02</span>
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
            <span
              id="html"
              onMouseEnter={moveHtmlLeft}
              onMouseLeave={moveHtmlRight}
            >
              HTML
            </span>
            ,&nbsp;<span id="css">CSS</span>,&nbsp;
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
        <ImageGrid>
          <div id="item-0">
            <HtmlPng src="html5-logo-31813.png"></HtmlPng>
          </div>
          <div id="item-1">&nbsp;</div>
          <div id="item-2">
            <JsPng src="javascript-39415.png"></JsPng>
          </div>
          <div id="item-3">&nbsp;</div>
          <div id="item-4">
            <CssPng src="CSS_3.png"></CssPng>
          </div>
          <div id="item-5">&nbsp;</div>
          <div id="item-6">&nbsp;</div>
          <div id="item-7">
            <ReactPng src="reactLogo.png" />
          </div>
          <div id="item-8">&nbsp;</div>
          <div id="item-9">&nbsp;</div>
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
            <HtmlPng src="html5-logo-31813.png" />
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
          <Hexagon
            width="8rem"
            height="8rem"
            duration="7.5s"
            top="5rem"
            right="23rem"
          >
            <div></div>
          </Hexagon>
          <Hexagon
            width="4.5r em"
            height="4.5rem"
            duration="4.5s"
            top="19rem"
            right="15rem"
          >
            <div></div>
          </Hexagon>
          <Hexagon
            width="7rem"
            height="7rem"
            duration="9.5s"
            top="23rem"
            right="26rem"
          >
            <div></div>
          </Hexagon>
          <Hexagon
            width="6rem"
            height="6rem"
            duration="7.5s"
            top="-1rem"
            right="10rem"
          >
            <div></div>
          </Hexagon>
          <Hexagon
            width="4rem"
            height="4rem"
            duration="3.5s"
            top="11rem"
            right="23rem"
          >
            <div></div>
          </Hexagon>
        </ImageGrid>
        <BreakLine />
      </Container>
    </Wrapper>
  );
}
