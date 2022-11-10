import styled from 'styled-components';

export const HeadlineBox = styled.div`
  color: #f8f8f8;

  font-weight: 900;
  position: absolute;
  height: 100%;
  font-size: 2rem;
  top: 0;
  width: 10rem;
  display: flex;
  justify-content: center;
  left: -8rem;
  z-index: 100000;
  font-family: 'Fjalla One', sans-serif;
  span {
    font-size: 4rem;
    position: absolute;
    color: rgba(25, 29, 36, 0.238);
  }
  @media (max-width: 765px) {
    top: -10%;
    width: 100%;
  }
`;
