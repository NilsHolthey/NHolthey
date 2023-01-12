import styled from 'styled-components';

export const BreakLine = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  height: 75%;
  width: 2px;
  z-index: 700;
  top: 50%;
  left: 50%;
  /* box-shadow: -0.5px -0.5px 2px 2px #ffffff55; */
  background-color: #999999;
  @media (max-width: 765px) {
    display: none;
  }
  @media (orientation: portrait) {
    display: none;
  }
`;
