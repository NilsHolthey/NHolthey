import styled from 'styled-components';

export const TextBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  color: #272c39;
  font-size: 2rem;
  width: 40vw;
  z-index: 1000;
  bottom: 30%;
  left: 15%;
  @media (max-width: 550px) {
    font-size: 1.4rem;
    width: 80vw;
    bottom: 15%;
    left: 10%;
  }
`;
