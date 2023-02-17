import styled from 'styled-components';

export const TextBox = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 12;
  color: #b5b5b5b5;

  p {
    font-weight: bolder;
    font-size: 3vh;
    font-family: 'Fjalla One', sans-serif;
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    color: #d1d1d1;

    a {
      padding-top: 1rem;
      font-family: 'Inter', sans-serif;
      color: #b5b5b5b5;
      width: 100%;
      text-align: right;
      display: flex;
      gap: 3px;
      justify-content: flex-end;
      align-items: center;
      font-size: 2vh;
    }
  }
  @media (max-width: 765px) {
    height: 35%;
    width: 100%;
    position: absolute;
    width: 100%;
    height: 100%;
    p {
      font-size: 2.5vh;
    }
  }
  @media (orientation: portrait) {
    top: 0;
    height: 35%;
    position: absolute;
    width: 100%;
    p {
      font-size: 2.5vh;
    }
  }
  @media (max-width: 765px) and (orientation: landscape) {
    width: 50%;
    height: 100%;
    left: 0;
    p {
      font-size: 2.5vh;
    }
  }
`;
