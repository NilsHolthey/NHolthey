import styled from 'styled-components';

export const Headline = styled.h3`
  color: #f8f8f8;
  /* padding: 1rem; */

  font-weight: 900;
  text-align: right;
  position: absolute;
  width: 120%;
  font-size: 1.5rem;
  top: 30%;
  -webkit-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  -o-transform: rotate(-90deg);
  transform: rotate(-90deg);
  -webkit-transform-origin: 50% 50%;
  -moz-transform-origin: 50% 50%;
  -ms-transform-origin: 50% 50%;
  -o-transform-origin: 50% 50%;
  transform-origin: 50% 50%;

  z-index: 100;
  font-family: 'Fjalla One', sans-serif;
  letter-spacing: 1px;
  span {
  }
  @media (orientation: portrait) {
    top: 0;
    width: fit-content;
    position: relative;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: 0 0;
    -moz-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    -o-transform-origin: 0 0;
    transform-origin: 0 0;
  }
  @media (max-width: 660px) {
    top: 0;
    width: fit-content;
    position: relative;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: 0 0;
    -moz-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    -o-transform-origin: 0 0;
    transform-origin: 0 0;
  }
  @media (max-width: 765px) and (orientation: landscape) {
    top: 0;
    width: fit-content;
    position: relative;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: 0 0;
    -moz-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    -o-transform-origin: 0 0;
    transform-origin: 0 0;
  }
`;
