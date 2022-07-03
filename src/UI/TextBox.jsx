import styled from 'styled-components';

export const TextBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  color: #272c39;
  font-size: 2rem;
  width: auto;
  z-index: 100;
  bottom: 30%;
  left: 15%;
  font-family: 'Fjalla One', sans-serif;
  @media (max-width: 550px) {
    font-size: 1.4rem;
    width: 80vw;
    bottom: 15%;
    left: 10%;
  }
  @media (max-width: 750px) {
    font-size: 1.4rem;
  }
`;
