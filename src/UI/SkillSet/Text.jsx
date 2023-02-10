import styled from 'styled-components';
export const Text = styled.div`
  margin: 0;
  width: 80%;

  font-weight: bolder;
  font-size: 3.5vh;
  font-family: 'Fjalla One', sans-serif;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  color: #d1d1d1;
  span {
  }
  @media (max-width: 765px) {
  }

  @media (orientation: portrait) {
    width: 95%;
    height: fit-content;
    padding: 2rem 0 2rem 0;
  }
`;
