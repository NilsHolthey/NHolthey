import styled from 'styled-components';

export const TextBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  color: #272c39;
  margin-left: 5rem;
  font-size: 3rem;
  width: auto;
  z-index: 100;
  bottom: 30%;
  right: 55%;
  font-family: 'Fjalla One', sans-serif;
  @media (max-width: 550px) {
    font-size: 1.4rem;
    width: 100vw;
    bottom: 25%;
    left: 15%;
    margin: 0;
    right: unset;
  }
  @media (max-width: 750px) {
    font-size: 1.4rem;
  }

  @media (orientation: portrait) {
    font-size: 1.4rem;
    width: 100vw;
    bottom: 25%;
    left: 15%;
    margin: 0;
    right: unset;
  }
  @media (max-width: 965px) and (orientation: landscape) {
    font-size: 1.4rem;
  }
`;
