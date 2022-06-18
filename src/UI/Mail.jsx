import styled from 'styled-components';

export const Mail = styled.a`
  text-decoration: none;
  font-family: 'Roboto Mono', monospace;
  color: #f8f8f8;

  -webkit-writing-mode: vertical-rl;
  writing-mode: vertical-rl;
  &:hover {
    color: #6667ab;
    transform: translate(0, -3%);
  }
`;
