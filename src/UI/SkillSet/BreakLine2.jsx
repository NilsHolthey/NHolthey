import styled from 'styled-components';

export const BreakLine2 = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  height: 2px;
  width: 85%;
  display: ${({ display = 'none' }) => display};
  bottom: 0%;
  left: 50%;
  /* box-shadow: -0.5px -0.5px 2px 2px #ffffff55; */
  background-color: #999999;
  @media (max-width: 765px) {
    display: block;
  }
  @media (orientation: portrait) {
    display: block;
  }
`;
