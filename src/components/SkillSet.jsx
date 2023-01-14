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
import { ArrowDown } from '../UI/ArrowDown';
import { FigmaPng } from '../UI/SkillSet/PNG/Figma';
import { GitHubPng } from '../UI/SkillSet/PNG/GitHub';
import { GitPng } from '../UI/SkillSet/PNG/Git';
import { ImmerJsPng } from '../UI/SkillSet/PNG/ImmerJs';
import { RestPng } from '../UI/SkillSet/PNG/Rest';

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
  const [showFigma, setShowFigma] = useState(false);
  const handleShowFigma = () => setShowFigma(!showFigma);
  const [showGithub, setShowGitHub] = useState(false);
  const handleShowGitHub = () => setShowGitHub(!showGithub);
  const [showGit, setShowGit] = useState(false);
  const handleShowGit = () => setShowGit(!showGit);
  const [showImmer, setShowImmer] = useState(false);
  const handleImmer = () => setShowImmer(!showImmer);
  const [showRest, setShowRest] = useState(false);
  const handleRest = () => setShowRest(!showRest);

  return (
    <Wrapper id="skillset">
      <Container
        viewport={{ once: true }}
        as={motion.section}
        variants={item}
        initial="hidden"
        whileInView="show"
      >
        <ArrowDown
          href="#work"
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
                01001000 0101010 01001101 01001100
              </BinarySpan>
            )}
            {showCss ? (
              <span id="css">CSS &nbsp;|&nbsp;</span>
            ) : (
              <BinarySpan>01000011 01010011 01010011</BinarySpan>
            )}
            {showJs ? (
              <span> JavaScript &nbsp;|&nbsp;</span>
            ) : (
              <BinarySpan>
                01001010 01100001 01110110 01100001 01010011 01100011 01110010
                01101001 01110000 01110100
              </BinarySpan>
            )}
            {showReact ? (
              <span>React &nbsp;|&nbsp;</span>
            ) : (
              <BinarySpan>
                01010010 01100101 01100001 01100011 01110100
              </BinarySpan>
            )}
            {showNode ? (
              <span>NodeJs&nbsp;|&nbsp;</span>
            ) : (
              <BinarySpan>
                01001110 01101111 01100100 01100101 01001010 01110011
              </BinarySpan>
            )}
            {showNext ? (
              <span>NEXT&nbsp;|&nbsp;</span>
            ) : (
              <BinarySpan>01001110 01000101 01011000 01010100</BinarySpan>
            )}
            {showZustand ? (
              <span>Zustand&nbsp;|&nbsp;</span>
            ) : (
              <BinarySpan>
                01011010 01110101 01110011 01110100 01100001 01101110 01100100
              </BinarySpan>
            )}
            {showSytledC ? (
              <span>styled-components&nbsp;|&nbsp;</span>
            ) : (
              <BinarySpan>
                01110011 01110100 01111001 01101100 01100101 01100100 00101101
                01100011 01101111 01101101 01110000 01101111 01101110 01100101
                01101110 01110100 01110011
              </BinarySpan>
            )}
            {showMongoDB ? (
              <span>MongoDB&nbsp;|&nbsp;</span>
            ) : (
              <BinarySpan>
                01001101 01101111 01101110 01100111 01101111 01000100 01000010
              </BinarySpan>
            )}
            {showGit ? (
              <span>Git&nbsp;|&nbsp;</span>
            ) : (
              <BinarySpan>01000111 01101001 01110100</BinarySpan>
            )}
            {showGithub ? (
              <span>GitHub&nbsp;|&nbsp;</span>
            ) : (
              <BinarySpan>
                01000111 01101001 01110100 01001000 01110101 01100010
              </BinarySpan>
            )}
            {showFigma ? (
              <span>Figma&nbsp;|&nbsp;</span>
            ) : (
              <BinarySpan>
                01000110 01101001 01100111 01101101 01100001
              </BinarySpan>
            )}
            {showESLint ? (
              <span>ESLint&nbsp;|&nbsp;</span>
            ) : (
              <BinarySpan>
                01000101 01010011 01001100 01101001 01101110 01110100
              </BinarySpan>
            )}
            {showImmer ? (
              <span>immerJs&nbsp;|&nbsp;</span>
            ) : (
              <BinarySpan>
                01101001 01101101 01101101 01100101 01110010 01001010 01110011
              </BinarySpan>
            )}
            {showRest ? (
              <span>Rest</span>
            ) : (
              <BinarySpan>01010010 01100101 01110011 01110100</BinarySpan>
            )}
          </Text>
        </TextBox>
        <ImageGrid
          as={motion.section}
          viewport={{ once: true }}
          variants={variants}
          initial="hidden"
          whileInView="show"
        >
          <BreakLine2 />
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
          <motion.div
            id="item-6"
            variants={grid}
            onClick={handleShowGitHub}
            style={{
              boxShadow: showGithub
                ? 'inset -6px -6px 10px rgba(12, 12, 12, 0.557), inset 6px 6px 10px rgba(92, 92, 92, 0.2)'
                : '',
            }}
          >
            {showGithub ? (
              <span>
                <GitHubPng
                  src="GitHub_logo.png"
                  style={{ scale: '0.9' }}
                ></GitHubPng>
              </span>
            ) : (
              <a href="#skillset">
                <GitHubPng src="GitHub_logo.png"></GitHubPng>
              </a>
            )}
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
                <ZustandPng src="zustandBear.png" style={{ scale: '0.9' }} />
              </span>
            ) : (
              <a href="#skillset">
                <ZustandPng src="zustandBear.png" />
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
          <motion.div
            id="item-11"
            variants={grid}
            onClick={handleShowFigma}
            style={{
              boxShadow: showFigma
                ? 'inset -6px -6px 10px rgba(12, 12, 12, 0.557), inset 6px 6px 10px rgba(92, 92, 92, 0.2)'
                : '',
            }}
          >
            {showFigma ? (
              <span>
                <FigmaPng src="figma-logo.png" style={{ scale: '0.9' }} />
              </span>
            ) : (
              <a href="#skillset">
                <FigmaPng src="figma-logo.png" />
              </a>
            )}
            &nbsp;
          </motion.div>
          <motion.div
            id="item-12"
            variants={grid}
            onClick={handleShowGit}
            style={{
              boxShadow: showGit
                ? 'inset -6px -6px 10px rgba(12, 12, 12, 0.557), inset 6px 6px 10px rgba(92, 92, 92, 0.2)'
                : '',
            }}
          >
            {showGit ? (
              <span>
                <GitPng src="gitIcon.png" style={{ scale: '0.9' }} />
              </span>
            ) : (
              <a href="#skillset">
                <GitPng src="gitIcon.png" />
              </a>
            )}
          </motion.div>
          <motion.div
            id="item-13"
            variants={grid}
            onClick={handleImmer}
            style={{
              boxShadow: showImmer
                ? 'inset -6px -6px 10px rgba(12, 12, 12, 0.557), inset 6px 6px 10px rgba(92, 92, 92, 0.2)'
                : '',
            }}
          >
            {showImmer ? (
              <span>
                <ImmerJsPng src="ImmerJsLogo.png" style={{ scale: '0.9' }} />
              </span>
            ) : (
              <a href="#skillset">
                <ImmerJsPng src="ImmerJsLogo.png" />
              </a>
            )}
          </motion.div>
          <motion.div
            id="item-14"
            variants={grid}
            onClick={handleRest}
            style={{
              boxShadow: showRest
                ? 'inset -6px -6px 10px rgba(12, 12, 12, 0.557), inset 6px 6px 10px rgba(92, 92, 92, 0.2)'
                : '',
            }}
          >
            {showRest ? (
              <span>
                <RestPng src="restLogo.png" style={{ scale: '0.9' }} />
              </span>
            ) : (
              <a href="#skillset">
                <RestPng src="restLogo.png" />
              </a>
            )}
          </motion.div>
        </ImageGrid>
        <BreakLine />
      </Container>
    </Wrapper>
  );
}
