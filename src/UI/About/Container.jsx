import styled from 'styled-components';

export const Container = styled.section`
  width: 60vw;
  height: 70vh;

  /* color: #f8f8f8; */
  border-radius: 4px;
  background: linear-gradient(145deg, #2a2f3d, #232833);
  box-shadow: 12px 12px 24px #1b1e27, -12px -12px 24px #333a4b;

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
