import styled from 'styled-components';

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50vw;
  @media (max-width: 550px) {
    width: 100vw;
    overflow: hidden;
  }
  @media (orientation: portrait) {
    width: 100vw;
    overflow: hidden;
    justify-content: center;
  }
`;
