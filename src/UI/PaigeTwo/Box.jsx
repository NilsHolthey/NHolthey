import styled from 'styled-components';

export const Box = styled.div`
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #f8f8f8;
  background: #272c39;
  box-shadow: -12px -12px 24px #1b1e27, 12px 12px 24px #333a4b;
  transition: all 300ms;
  cursor: pointer;
  z-index: 900;

  &:hover {
    scale: 1.1;
    z-index: 1000;
    section {
      transform: translateY(0);
    }
    svg {
      filter: grayscale(85%);
      transition: filter 300ms;
    }
  }
`;
2;
