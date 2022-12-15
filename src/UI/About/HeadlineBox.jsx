import styled from 'styled-components';

export const HeadlineBox = styled.section`
  color: #f8f8f8;
  font-weight: 900;
  position: absolute;
  height: 10rem;
  font-size: 2rem;
  top: 0;
  width: 6rem;
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
  div {
  }

  @media (max-width: 765px) {
    top: -8rem;
    left: 0;
    width: 75%;
    align-items: center;
    justify-content: space-between;

    div {
      width: 5rem;
      height: 2px;
      background-color: #f8f8f8;
    }
    span {
      font-size: 4rem;
      position: relative;
      color: rgba(25, 29, 36, 0.238);
    }
  }
  @media (max-width: 765px) and (orientation: landscape) {
    top: -8rem;
    left: 0;
    width: 60%;
    align-items: center;
    justify-content: space-between;

    div {
      width: 5rem;
      height: 2px;
      background-color: #f8f8f8;
    }
    span {
      font-size: 4rem;
      position: relative;
      color: rgba(25, 29, 36, 0.238);
    }
  }
`;
