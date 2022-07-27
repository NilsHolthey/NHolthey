import styled from 'styled-components';

export const Container = styled.section`
  width: 60vw;
  height: 70vh;

  color: #f8f8f8;
  background-color: #1c2028;

  padding: 1rem;
  position: relative;
  @media (max-width: 665px) {
    width: 80vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0;
    background-color: rgb(102, 103, 171, 0.3);
    opacity: 0.3;
  }
`;
