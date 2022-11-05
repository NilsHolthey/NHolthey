import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 60vw;
  height: 90vh;

  /* color: #f8f8f8; */
  border-radius: 4px;

  background-color: #272c391e;
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
