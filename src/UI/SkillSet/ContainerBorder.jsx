import styled from 'styled-components';

export const ContainerBorder = styled.div`
  border-radius: inherit;
  background: rgba(25, 29, 36);
  position: relative;
  display: flex;
  align-items: center;
  transition: all 0.25s;
  height: calc(100% - 0.3rem);
  width: calc(100% - 0.3rem);

  @media (max-width: 765px) {
    width: 90vw;
    min-height: 80vh;
    height: fit-content;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 3%;
  }
  @media (orientation: portrait) {
    width: 97vw;
    min-height: 80vh;
    /* height: fit-content; */
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 3%;
  }
  @media (max-width: 765px) and (orientation: landscape) {
    width: 97vw;
    height: fit-content;
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 965px) and (orientation: landscape) {
    height: fit-content;
    padding: 2rem;
  }
`;
