import styled from 'styled-components';

export const ContainerShadowBottom = styled.div`
  width: 100%;
  height: 150%;
  /* box-shadow: -100px 149px 77px -10px rgba(25, 29, 36, 1),
    100px 149px 77px -10px rgba(25, 29, 36, 1); */
  bottom: -110rem;
  z-index: 11115;
  background: rgb(25, 29, 36);
  background: linear-gradient(
    0deg,
    rgba(25, 29, 36, 1) 65%,
    rgba(0, 0, 0, 0) 100%
  );
  position: absolute;
  @media (max-width: 665px) {
    top: 10rem;
  }
`;
