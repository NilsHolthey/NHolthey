import styled from 'styled-components';

export const Container = styled.section`
  width: 70vw;
  height: 70vh;

  /* color: #f8f8f8; */
  border-radius: 4px;
  z-index: -1;
  padding: 1rem;
  position: relative;

  @media (max-width: 665px) {
    width: 80vw;
    display: flex;
    height: 150vh;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0;
    background-color: rgb(102, 103, 171, 0.3);
    opacity: 0.3;
  }
`;
