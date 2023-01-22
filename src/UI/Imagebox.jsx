import styled from 'styled-components';

export const Imagebox = styled.div`
  width: 100dvw;
  height: 100vh;
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 551px) {
    align-items: flex-start;
  }
`;
