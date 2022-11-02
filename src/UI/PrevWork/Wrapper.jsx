import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 60vw;
  height: 70vh;

  /* color: #f8f8f8; */
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  position: relative;

  @media (max-width: 665px) {
    width: 90vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0;
    background-color: rgb(102, 103, 171, 0.3);
    opacity: 0.3;
  }
`;
