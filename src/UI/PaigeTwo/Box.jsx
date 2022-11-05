import styled from 'styled-components';
import { Headline } from './Headline';

export const Box = styled.div`
  overflow: hidden;
  display: flex;

  text-align: center;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #f8f8f8;
  background: rgb(39, 44, 57);
  /* box-shadow: -4px -4px 6px #6667ab97, 4px 4px 6px #6667ab97; */

  cursor: pointer;
  z-index: 900;
  /* clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%); */
  svg {
    -webkit-box-reflect: below 0
      linear-gradient(to bottom, transparent, #88888824);
  }
  ${Headline}:hover {
    background-color: hotpink;
  }
  &:hover {
    z-index: 1000;
    section {
      scale: 1;
    }

    svg {
      filter: grayscale(85%);
      transition: filter 300ms;
    }
  }
`;
