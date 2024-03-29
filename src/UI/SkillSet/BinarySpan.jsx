import styled from 'styled-components';

export const BinarySpan = styled.span`
  font-size: 1.4vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  font-weight: normal;
  font-family: 'Roboto Mono', monospace;
  color: #f8f8f8;

  @media (orientation: portrait) {
    font-size: 1.5vh;
  }
  @media (max-width: 965px) and (orientation: landscape) {
    font-size: 2vh;
  }
`;
