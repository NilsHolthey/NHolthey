import styled from 'styled-components';

export const DevImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  /* transform: translate(-50%, -50%); */
  transform: translate(-50%, -50%);
  width: 90vw;

  display: flex;

  opacity: 0.05;
  filter: drop-shadow(13px 15px 75px rgba(74, 74, 74, 0.95));

  @media (max-width: 550px) {
    top: 30%;
    opacity: 0.09;
  }
`;
