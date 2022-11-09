import styled from 'styled-components';

export const Container = styled.section`
  width: 70vw;
  height: 70vh;

  /* color: #f8f8f8; */
  border-radius: 4px;
  z-index: 0;
  padding: 1rem;
  position: relative;
  background: rgba(25, 29, 36);
  @media (max-width: 765px) {
    width: 90vw;
    display: flex;
    height: 120vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
