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
import { NodeJs } from '../UI/SkillSet/PNG/NodeJs';
import { NextJs } from '../UI/SkillSet/PNG/NextJs';
import { ZustandPng } from '../UI/SkillSet/PNG/Zustand';
import { StyledComponentsPng } from '../UI/SkillSet/PNG/StyledComponents';
import { EsLintPng } from '../UI/SkillSet/PNG/EsLint';
import { MongoDBPng } from '../UI/SkillSet/PNG/MongoDB';

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
  const [showNode, setShowNode] = useState(false);
  const handleShowNode = () => setShowNode(!showNode);
  const [showNext, setShowNext] = useState(false);
  const handleShowNext = () => setShowNext(!showNext);
  const [showCss, setShowCss] = useState(false);
  const handleShowCss = () => setShowCss(!showCss);
  const [showReact, setShowReact] = useState(false);
  const handleShowReact = () => setShowReact(!showReact);
  const [showZustand, setShowZustand] = useState(false);
  const handleShowZustand = () => setShowZustand(!showZustand);
  const [showSytledC, setShowStyledC] = useState(false);
  const handleShowStyledC = () => setShowStyledC(!showSytledC);
  const [showESLint, setShowESLint] = useState(false);
  const handleShowESLint = () => setShowESLint(!showESLint);
  const [showMongoDB, setShowMongoDB] = useState(false);
  const handleShowMongoDB = () => setShowMongoDB(!showMongoDB);

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
          <div></div>
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
                01001000 0101010 01001101 01001100 &nbsp;
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
            {showNode ? (
              <span>NodeJs&nbsp;|&nbsp;</span>
            ) : (
              <BinarySpan>
                01001110 01101111 01100100 01100101 01001010 01110011&nbsp;
              </BinarySpan>
            )}
            {showNext ? (
              <span>NEXT&nbsp;|&nbsp;</span>
            ) : (
              <BinarySpan>01001110 01000101 01011000 01010100&nbsp;</BinarySpan>
            )}
            {showZustand ? (
              <span>Zustand&nbsp;|&nbsp;</span>
            ) : (
              <BinarySpan>
                01011010 01110101 01110011 01110100 01100001 01101110
                01100100&nbsp;
              </BinarySpan>
            )}
            {showSytledC ? (
              <span>styled-components&nbsp;|&nbsp;</span>
            ) : (
              <BinarySpan>
                01110011 01110100 01111001 01101100 01100101 01100100 00101101
                01100011 01101111 01101101 01110000 01101111 01101110 01100101
                01101110 01110100 01110011&nbsp;
              </BinarySpan>
            )}
            {showMongoDB ? (
              <span>MongoDB&nbsp;|&nbsp;</span>
            ) : (
              <BinarySpan>
                01001101 01101111 01101110 01100111 01101111 01000100
                01000010&nbsp;
              </BinarySpan>
            )}
            <span>Git</span>&nbsp; |&nbsp;<span>GitHub</span>&nbsp;|&nbsp;
            <span>Figma</span>&nbsp;|&nbsp;
            {showESLint ? (
              <span>ESLint&nbsp;|&nbsp;</span>
            ) : (
              <BinarySpan>
                01000101 01010011 01001100 01101001 01101110 01110100&nbsp;
              </BinarySpan>
            )}
            <span>ReactDnD</span>&nbsp;|&nbsp;<span>Rest</span>&nbsp;|&nbsp;
            <span>npm</span>.
          </Text>
          <BreakLine2 />
        </TextBox>
        <ImageGrid
          as={motion.section}
          viewport={{ once: true }}
          variants={variants}
          initial="hidden"
          whileInView="show"
        >
          <motion.div
            id="item-0"
            variants={grid}
            onClick={handleShowHtml}
            style={{
              boxShadow: showHtml
                ? 'inset -6px -6px 10px rgba(12, 12, 12, 0.557), inset 6px 6px 10px rgba(92, 92, 92, 0.2)'
                : '',
            }}
          >
            {showHtml ? (
              <span>
                <HtmlPng
                  src="html5-logo-31813.png"
                  style={{ scale: '0.9' }}
                ></HtmlPng>
              </span>
            ) : (
              <a href="#skillset">
                <HtmlPng src="html5-logo-31813.png"></HtmlPng>
              </a>
            )}
          </motion.div>
          <motion.div
            id="item-1"
            variants={grid}
            onClick={handleShowNode}
            style={{
              boxShadow: showNode
                ? 'inset -6px -6px 10px rgba(12, 12, 12, 0.557), inset 6px 6px 10px rgba(92, 92, 92, 0.2)'
                : '',
            }}
          >
            {showNode ? (
              <span>
                <NodeJs
                  src="nodejs-icon-890222153.png"
                  style={{ scale: '0.9' }}
                ></NodeJs>
              </span>
            ) : (
              <a href="#skillset">
                <NodeJs src="nodejs-icon-890222153.png"></NodeJs>
              </a>
            )}
          </motion.div>
          <motion.div
            id="item-2"
            variants={grid}
            onClick={handleShowJs}
            style={{
              boxShadow: showJs
                ? 'inset -6px -6px 10px rgba(12, 12, 12, 0.557), inset 6px 6px 10px rgba(92, 92, 92, 0.2)'
                : '',
            }}
          >
            {showJs ? (
              <span>
                <JsPng
                  src="javascript-39415.png"
                  style={{ scale: '0.9' }}
                ></JsPng>
              </span>
            ) : (
              <a href="#skillset">
                <JsPng src="javascript-39415.png"></JsPng>
              </a>
            )}
          </motion.div>
          <motion.div
            id="item-3"
            variants={grid}
            onClick={handleShowMongoDB}
            style={{
              boxShadow: showMongoDB
                ? 'inset -6px -6px 10px rgba(12, 12, 12, 0.557), inset 6px 6px 10px rgba(92, 92, 92, 0.2)'
                : '',
            }}
          >
            {showMongoDB ? (
              <span>
                <MongoDBPng src="MondoDBLogo.png" style={{ scale: '0.9' }} />
              </span>
            ) : (
              <a href="#skillset">
                <MongoDBPng src="MondoDBLogo.png" />
              </a>
            )}
          </motion.div>
          <motion.div
            id="item-4"
            variants={grid}
            onClick={handleShowCss}
            style={{
              boxShadow: showCss
                ? 'inset -6px -6px 10px rgba(12, 12, 12, 0.557), inset 6px 6px 10px rgba(92, 92, 92, 0.2)'
                : '',
            }}
          >
            {showCss ? (
              <span>
                <CssPng src="CSS_3.png" style={{ scale: '0.9' }}></CssPng>
              </span>
            ) : (
              <a href="#skillset">
                <CssPng src="CSS_3.png"></CssPng>
              </a>
            )}
          </motion.div>
          <motion.div
            id="item-5"
            variants={grid}
            onClick={handleShowNext}
            style={{
              boxShadow: showNext
                ? 'inset -6px -6px 10px rgba(12, 12, 12, 0.557), inset 6px 6px 10px rgba(92, 92, 92, 0.2)'
                : '',
            }}
          >
            {showNext ? (
              <span>
                <NextJs
                  src="next-js-logo.png"
                  style={{ scale: '0.9' }}
                ></NextJs>
              </span>
            ) : (
              <a href="#skillset">
                <NextJs src="next-js-logo.png"></NextJs>
              </a>
            )}
          </motion.div>
          <motion.div id="item-6" variants={grid}>
            &nbsp;
          </motion.div>
          <motion.div
            id="item-7"
            variants={grid}
            onClick={handleShowReact}
            style={{
              boxShadow: showReact
                ? 'inset -6px -6px 10px rgba(12, 12, 12, 0.557), inset 6px 6px 10px rgba(92, 92, 92, 0.2)'
                : '',
            }}
          >
            {showReact ? (
              <span>
                <ReactPng src="reactLogo.png" style={{ scale: '0.9' }} />
              </span>
            ) : (
              <a href="#skillset">
                <ReactPng src="reactLogo.png" />
              </a>
            )}
          </motion.div>
          <motion.div
            id="item-8"
            variants={grid}
            onClick={handleShowStyledC}
            style={{
              boxShadow: showSytledC
                ? 'inset -6px -6px 10px rgba(12, 12, 12, 0.557), inset 6px 6px 10px rgba(92, 92, 92, 0.2)'
                : '',
            }}
          >
            {showSytledC ? (
              <span>
                <StyledComponentsPng
                  src="logoStyledC.png"
                  style={{ scale: '0.9' }}
                />
              </span>
            ) : (
              <a href="#skillset">
                <StyledComponentsPng src="logoStyledC.png" />
              </a>
            )}
            &nbsp;
          </motion.div>
          <motion.div
            id="item-9"
            variants={grid}
            onClick={handleShowZustand}
            style={{
              boxShadow: showZustand
                ? 'inset -6px -6px 10px rgba(12, 12, 12, 0.557), inset 6px 6px 10px rgba(92, 92, 92, 0.2)'
                : '',
            }}
          >
            {showZustand ? (
              <span>
                <ZustandPng src="ZustandBear.png" style={{ scale: '0.9' }} />
              </span>
            ) : (
              <a href="#skillset">
                <ZustandPng src="ZustandBear.png" />
              </a>
            )}
            &nbsp;
          </motion.div>
          <motion.div
            id="item-10"
            variants={grid}
            onClick={handleShowESLint}
            style={{
              boxShadow: showESLint
                ? 'inset -6px -6px 10px rgba(12, 12, 12, 0.557), inset 6px 6px 10px rgba(92, 92, 92, 0.2)'
                : '',
            }}
          >
            {showESLint ? (
              <span>
                <EsLintPng src="ESLint.png" style={{ scale: '0.9' }} />
              </span>
            ) : (
              <a href="#skillset">
                <EsLintPng src="ESLint.png" />
              </a>
            )}
            &nbsp;
          </motion.div>
          <motion.div id="item-11" variants={grid}>
            &nbsp;
          </motion.div>
          <motion.div id="item-12" variants={grid}>
            &nbsp;
          </motion.div>
          <motion.div id="item-13" variants={grid}>
            &nbsp;
          </motion.div>
          <motion.div id="item-14" variants={grid}>
            &nbsp;
          </motion.div>
        </ImageGrid>
        <BreakLine />
      </Container>
    </Wrapper>
  );
}
