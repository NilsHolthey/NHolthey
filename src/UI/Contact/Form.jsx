import styled from 'styled-components';

export const Form = styled.form`
  height: 60vh;
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  color: #d1d1d1;
  position: relative;

  @media (max-width: 665px) {
    width: 80vw;
  }
`;
