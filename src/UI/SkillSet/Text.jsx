import styled from 'styled-components';
export const Text = styled.p`
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
    animation-name: opacity;

    animation-duration: 1.5s;
    animation-iteration-count: 1;

    animation-timing-function: ease-in-out;
    @keyframes opacity {
      from {
        opacity: 0;
        color: #6667ab;
        scale: 0.9;
      }
      to {
        color: #d1d1d1;
        opacity: 1;
      }
    }
    transition: all 300ms ease;
  }
  @media (max-width: 765px) {
  }

  @media (orientation: portrait) {
    width: 95%;
    height: fit-content;
    padding: 2rem 0 2rem 0;
  }
`;
