import styled from 'styled-components';

export const ContainerShadow = styled.div`
  width: 100%;
  height: 150%;
  /* box-shadow: -100px 149px 77px -10px rgba(25, 29, 36, 1),
    100px 149px 77px -10px rgba(25, 29, 36, 1); */
  top: 30rem;
  z-index: 11115;
  background: rgb(25, 29, 36);
  background-image: url('/Grunge-PNG.png');

  background: linear-gradient(
    180deg,
    rgba(25, 29, 36, 1) 65%,
    rgba(0, 0, 0, 0) 100%
  );
  position: absolute;
  @media (max-width: 665px) {
    top: 10rem;
  }
`;
