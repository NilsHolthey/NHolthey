import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100dvw;
  height: 100dvh;
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
`;
