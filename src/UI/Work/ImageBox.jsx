import styled from 'styled-components';

export const ImageBox = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  z-index: 10;
  align-items: flex-end;

  position: relative;
  justify-content: center;
  overflow: hidden;
  @media (max-width: 765px) {
    height: 65%;
    width: 100%;
  }

  @media (orientation: portrait) {
    height: 65%;
    width: 100%;
  }
`;
