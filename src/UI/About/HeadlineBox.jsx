import styled from 'styled-components';

export const HeadlineBox = styled.div`
  color: #f8f8f8;
  padding: 1rem;

  font-weight: 900;
  position: absolute;
  height: 100%;
  font-size: 2rem;
  top: -2rem;
  width: 10rem;
  display: flex;
  justify-content: center;
  left: -12%;
  z-index: 100000;
  font-family: 'Fjalla One', sans-serif;
  span {
    font-size: 4rem;
    position: absolute;
    color: rgba(25, 29, 36, 0.238);
  }
`;
