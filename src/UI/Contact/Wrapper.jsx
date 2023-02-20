import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100dvw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: #dcdcdc; */

  @media (max-width: 765px) {
    height: fit-content;
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
  @media (max-height: 765px) {
    height: fit-content;
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
  @media (orientation: portrait) {
    height: fit-content;
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  @media (max-width: 965px) and (orientation: landscape) {
    margin-top: 10vh;
    margin-bottom: 10vh;
  }
`;
