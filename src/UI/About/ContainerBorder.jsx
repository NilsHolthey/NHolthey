import styled from 'styled-components';

export const ContainerBorder = styled.div`
  background: rgba(25, 29, 36);
  border-radius: inherit;
  display: flex;
  justify-content: center;
  align-items: center;

  height: calc(100% - 0.3rem);
  width: calc(100% - 0.3rem);

  @media (max-width: 765px) {
    width: 97vw;
    display: flex;
    height: 160vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (orientation: portrait) {
    height: fit-content;
    flex-direction: column-reverse;
    width: 97vw;
    min-height: 80vh;
    display: flex;

    align-items: center;
    justify-content: center;
  }

  @media (max-width: 765px) and (orientation: landscape) {
    width: 90vw;
  }
`;
