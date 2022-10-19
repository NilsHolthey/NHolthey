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
  background-color: #272c39;
  transition: all 300ms;

  &:hover {
    filter: grayscale(75%);
    cursor: pointer;
    scale: 1.1;
    box-shadow: 0 0 1.5px 0 darkgrey;

    z-index: 100;
    section {
      transform: translateY(0);
    }
  }
`;
2;
