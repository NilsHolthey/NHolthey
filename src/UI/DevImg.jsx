import styled from 'styled-components';

export const DevImg = styled.img`
  width: 90vw;

  opacity: 0.05;
  filter: drop-shadow(13px 15px 75px rgba(74, 74, 74, 0.95));
  padding-bottom: 4rem;
  @media (max-width: 550px) {
    padding-bottom: 10rem;
  }
`;
