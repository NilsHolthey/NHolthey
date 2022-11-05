import styled from 'styled-components';

export const Headline = styled.h3`
  color: #f8f8f8;
  /* padding: 1rem; */

  font-weight: 900;
  position: absolute;
  /* position: absolute; */

  font-size: 1.5rem;
  top: 50%;
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

  z-index: 100000;
  font-family: 'Fjalla One', sans-serif;

  span {
  }
  @media (max-width: 660px) {
    top: 0;
  }
`;
