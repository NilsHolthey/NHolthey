import styled from 'styled-components';

export const ImageContainer = styled.div`
  position: absolute;
  right: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  height: 90%;
  transform: translatey(-50%);
  @media (max-width: 550px) {
    width: 100vw;
    overflow: hidden;
    position: static;
    transform: unset;
  }
  @media (orientation: portrait) {
    width: 100vw;
    overflow: hidden;
    justify-content: center;
    position: static;
    transform: unset;
  }
`;
