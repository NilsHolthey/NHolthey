import styled from 'styled-components';

export const StyledFooter = styled.footer`
  width: 100dvw;
  height: 15vh;

  color: #f8f8f8;
  background-color: #272c39;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (orientation: portrait) {
    height: 30vh;
    background-color: unset;
  }
`;
