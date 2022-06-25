import styled from 'styled-components';

export const Container = styled.section`
  width: 60vw;
  height: 70vh;

  color: #f8f8f8;
  background-color: #1c2028;

  padding: 1rem;
  position: relative;
  @media (max-width: 665px) {
    width: 70vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;
