import styled from 'styled-components';

export const AboutText = styled.p`
  bottom: 3rem;
  background-image: linear-gradient(
    125deg,
    rgba(102, 103, 171, 1) 20%,
    rgba(226, 97, 190, 1) 59%,
    rgba(220, 220, 220, 1) 90%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  opacity: 0.5;
  &:hover {
    filter: grayscale(40%);
  }
`;
