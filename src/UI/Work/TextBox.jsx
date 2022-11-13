import styled from 'styled-components';

export const TextBox = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-weight: bolder;
    font-size: 3.5vh;
    font-family: 'Fjalla One', sans-serif;
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    color: #d1d1d1;
  }
  @media (max-width: 765px) {
    height: 35%;
    width: 100%;
    p {
      font-size: 2.5vh;
    }
  }
  @media (orientation: portrait) {
    height: 35%;
    width: 100%;
    p {
      font-size: 2.5vh;
    }
  }
`;
