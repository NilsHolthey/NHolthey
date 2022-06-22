import styled from 'styled-components';

export const TextBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  color: #272c39;
  font-size: 2rem;
  width: 40vw;
  z-index: 10;

  @media (max-width: 550px) {
    font-size: 1.5rem;
    width: 100vw;
  }
`;
