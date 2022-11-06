import { useEffect, useState } from 'react';
import { Headline } from '../UI/About/Headline';
import { HeadlineBox } from '../UI/About/HeadlineBox';
import { TopLine } from '../UI/About/TopLine';
import { Container } from '../UI/SkillSet/Container';
import { Hexagon } from '../UI/SkillSet/Hexagone';
import { Text } from '../UI/SkillSet/Text';
import { TextBox } from '../UI/SkillSet/TextBox';
import { Wrapper } from '../UI/SkillSet/Wrapper';

export default function Skillset() {
  function changeBackground() {
    let hex01 = document.getElementById('html');
    hex01.style.transition = 'color 0.1s ease-in-out';
    hex01.style.color = '#6667ab';
  }
  function changeBackgroundBack() {
    let hex01 = document.getElementById('html');
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
      <Container>
        <HeadlineBox>
          <span>03</span>
          <TopLine />

          <Headline>Skills Set</Headline>
        </HeadlineBox>
        <TextBox>
          <Text>
            <span id="html">HTML</span>,&nbsp;<span>CSS</span>,&nbsp;
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
          duration="8s"
          onMouseEnter={changeBackground}
          onMouseLeave={changeBackgroundBack}
          top="1rem"
          right="1rem"
        ></Hexagon>
        <Hexagon duration="6s" top="70%" right="-3rem"></Hexagon>
        <Hexagon duration="7s" top="15rem" right="3rem"></Hexagon>
      </Container>
    </Wrapper>
  );
}
