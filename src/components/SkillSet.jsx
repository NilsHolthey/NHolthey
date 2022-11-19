import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useState } from 'react';
// import { useEffect, useState } from 'react';
import { Headline } from '../UI/About/Headline';

import { BinarySpan } from '../UI/SkillSet/BinarySpan';
import { BreakLine } from '../UI/SkillSet/BreakLine';
import { BreakLine2 } from '../UI/SkillSet/BreakLine2';
// import { TopLine } from '../UI/About/TopLine';
import { Container } from '../UI/SkillSet/Container';

import { HeadlineBox } from '../UI/About/HeadlineBox';
// import { Hexagon } from '../UI/SkillSet/Hexagone';
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
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [showHtml, setShowHtml] = useState(false);
  const handleShowHtml = () => setShowHtml(!showHtml);
  const [showJs, setShowJs] = useState(false);
  const handleShowJs = () => setShowJs(!showJs);
  const [showCss, setShowCss] = useState(false);
  const handleShowCss = () => setShowCss(!showCss);
  const [showReact, setShowReact] = useState(false);
  const handleShowReact = () => setShowReact(!showReact);

  return (
    <Wrapper id="skillset">
      <Container
        viewport={{ once: true }}
        as={motion.section}
        variants={item}
        initial="hidden"
        whileInView="show"
      >
        <HeadlineBox>
          <span>02</span>
          <Headline>Skill Set</Headline>
        </HeadlineBox>
        <TextBox
          id="textBox"
          style={{
            background: `radial-gradient(circle, #e261bd70 0%, rgba(39, 44, 57, 0)  ${
              offsetY * 0.04
            }%)`,
          }}
        >
          <Text
            as={motion.p}
            viewport={{ once: true }}
            variants={text}
            initial="hidden"
            whileInView="show"
          >
            {showHtml ? (
              <span>HTML&nbsp;|&nbsp;</span>
            ) : (
              <BinarySpan id="html">
                01001000 01010100 01001101 01001100 &nbsp;
              </BinarySpan>
            )}
            {showCss ? (
              <span id="css">CSS &nbsp;|&nbsp;</span>
            ) : (
              <BinarySpan>01000011 01010011 01010011&nbsp;</BinarySpan>
            )}
            {showJs ? (
              <span> JavaScript &nbsp;|&nbsp;</span>
            ) : (
              <BinarySpan>
                01001010 01100001 01110110 01100001 01010011 01100011 01110010
                01101001 01110000 01110100&nbsp;
              </BinarySpan>
            )}
            {showReact ? (
              <span>React&nbsp;|&nbsp;</span>
            ) : (
              <BinarySpan>
                01010010 01100101 01100001 01100011 01110100&nbsp;
              </BinarySpan>
            )}
            <span>NodeJS</span>&nbsp;|&nbsp;
            <span> NEXT</span>&nbsp;|&nbsp;<span>Zustand</span>&nbsp;|&nbsp;
            <span>styled-components</span>&nbsp;|&nbsp;<span>MongoDB</span>
            &nbsp;|&nbsp;
            <span>Git</span>&nbsp; |&nbsp;<span>GitHub</span>&nbsp;|&nbsp;
            <span>Figma</span>&nbsp;|&nbsp;
            <span>AdobeXD</span>&nbsp;|&nbsp;
            <span>ReactDnD</span>&nbsp;|&nbsp;<span>Rest</span>.
          </Text>
          <BreakLine2 />
        </TextBox>
        <ImageGrid>
          <div
            id="item-0"
            onClick={handleShowHtml}
            style={{
              boxShadow: showHtml
                ? 'inset -6px -6px 10px rgba(12, 12, 12, 0.557), inset 6px 6px 10px rgba(92, 92, 92, 0.2)'
                : '',
            }}
          >
            {showHtml ? (
              <span>
                <HtmlPng src="html5-logo-31813.png"></HtmlPng>
              </span>
            ) : (
              <a href="#skillset">
                <HtmlPng src="html5-logo-31813.png"></HtmlPng>
              </a>
            )}
          </div>
          <div id="item-1">&nbsp;</div>
          <div
            id="item-2"
            onClick={handleShowJs}
            style={{
              boxShadow: showJs
                ? 'inset -6px -6px 10px rgba(12, 12, 12, 0.557), inset 6px 6px 10px rgba(92, 92, 92, 0.2)'
                : '',
            }}
          >
            {showJs ? (
              <span>
                <JsPng src="javascript-39415.png"></JsPng>
              </span>
            ) : (
              <a href="#skillset">
                <JsPng src="javascript-39415.png"></JsPng>
              </a>
            )}
          </div>
          <div id="item-3">&nbsp;</div>
          <div
            id="item-4"
            onClick={handleShowCss}
            style={{
              boxShadow: showCss
                ? 'inset -6px -6px 10px rgba(12, 12, 12, 0.557), inset 6px 6px 10px rgba(92, 92, 92, 0.2)'
                : '',
            }}
          >
            {showCss ? (
              <span>
                <CssPng src="CSS_3.png"></CssPng>
              </span>
            ) : (
              <a href="#textBox">
                <CssPng src="CSS_3.png"></CssPng>
              </a>
            )}
          </div>
          <div id="item-5">&nbsp;</div>
          <div id="item-6">&nbsp;</div>
          <div
            id="item-7"
            onClick={handleShowReact}
            style={{
              boxShadow: showReact
                ? 'inset -6px -6px 10px rgba(12, 12, 12, 0.557), inset 6px 6px 10px rgba(92, 92, 92, 0.2)'
                : '',
            }}
          >
            {showReact ? (
              <span>
                <ReactPng src="reactLogo.png" />
              </span>
            ) : (
              <a href="#textBox">
                <ReactPng src="reactLogo.png" />
              </a>
            )}
          </div>
          <div id="item-8">&nbsp;</div>
          <div id="item-9">&nbsp;</div>
          <div id="item-10">&nbsp;</div>
          <div id="item-11">&nbsp;</div>
          <div id="item-12">&nbsp;</div>
          <div id="item-13">&nbsp;</div>
          <div id="item-14">&nbsp;</div>
        </ImageGrid>
        <BreakLine />
      </Container>
    </Wrapper>
  );
}
