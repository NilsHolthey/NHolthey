import styled from 'styled-components';

export const Container = styled.section`
  width: 60vw;
  height: 70vh;

  color: #f8f8f8;
  background: linear-gradient(225deg, #191d24, #1e222b);
  box-shadow: -25px 25px 50px #15181e, 25px -25px 50px #232832;

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
