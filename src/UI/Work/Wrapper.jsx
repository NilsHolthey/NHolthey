import styled from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
  height: 100vh;
  width: 100dvw;
  /* background: #dcdcdc; */
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 965px) and (orientation: landscape) {
    padding-bottom: 2rem;
    padding-top: 2rem;
    margin-top: 15vh;
    margin-bottom: 10vh;
  }
`;
