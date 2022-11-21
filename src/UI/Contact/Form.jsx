import styled from 'styled-components';

export const Form = styled.form`
  width: 50%;
  height: 100%;
  flex-direction: column;
  gap: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000000;

  @media (max-width: 765px) {
    width: 100%;
  }

  @media (orientation: portrait) {
    width: 100%;
  }
  @media (max-width: 899px) and (orientation: landscape) {
    width: 80%;
    scale: 0.8;
  }
`;
