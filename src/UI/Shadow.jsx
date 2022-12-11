import styled from 'styled-components';

export const Shadow = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  background: rgb(220, 220, 220);
  background: radial-gradient(
    circle,
    rgba(220, 220, 220, 1) 30%,
    rgba(39, 44, 57, 0.7329306722689075) 100%
  );
  scale: 2;
`;
