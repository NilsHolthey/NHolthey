import styled from 'styled-components';

export const DevImg = styled.img`
  width: 90vw;

  opacity: 0.05;
  filter: drop-shadow(13px 15px 75px rgba(74, 74, 74, 0.95));
  padding-top: 30%;
  @media (min-width: 551px) {
    display: none;
  }
`;
