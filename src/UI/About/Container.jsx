import styled from 'styled-components';

export const Container = styled.section`
  width: 70vw;
  height: 80vh;
  display: flex;
  /* color: #f8f8f8; */
  border-radius: 8px;
  z-index: 0;
  padding: 1rem;
  position: relative;
  background: rgba(25, 29, 36);
  height: 80vh;
  @media (max-width: 765px) {
    width: 95vw;
    display: flex;
    height: 160vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (orientation: portrait) {
    height: fit-content;
    flex-direction: column-reverse;
  }
`;
