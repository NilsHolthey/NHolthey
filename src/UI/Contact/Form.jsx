import styled from 'styled-components';

export const Form = styled.form`
  height: 60vh;
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background-color: rgb(39, 44, 57, 0.2);
  position: relative;

  @media (max-width: 665px) {
    width: 80vw;
  }
`;
