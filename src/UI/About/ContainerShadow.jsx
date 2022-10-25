import styled from 'styled-components';

export const ContainerShadow = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: -100px 149px 77px -10px rgba(25, 29, 36, 1),
    100px 149px 77px -10px rgba(25, 29, 36, 1);
  top: 35rem;
  z-index: 11115;
  background-color: rgba(25, 29, 36, 1);
  position: absolute;
  @media (max-width: 665px) {
    top: 10rem;
  }
`;
