import styled from 'styled-components';

export const TextBox = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(39, 44, 57);
  background: radial-gradient(
    circle 20rem,
    rgba(102, 103, 171, 0.717) 0%,
    rgba(39, 44, 57, 0) 63%
  );
  div {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    gap: 1rem;
  }
  p {
    font-weight: bolder;
    font-size: 4.5vh;
    font-family: 'Fjalla One', sans-serif;
    margin: 0;

    width: 80%;
    color: #d1d1d1;

    span {
      transition: transform 300ms ease-out;
      &:hover {
        transform: rotate(20deg);
      }
      padding-left: 0.2rem;
      font-size: 5vh;
    }
  }

  @media (max-width: 765px) {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: transparent;
    padding-top: 0;
    flex-direction: column;
    div {
      padding: 0 1rem 2rem 1rem;
      gap: 1rem;
    }
    p {
      font-size: 3vh;
      span {
        font-size: 4vh;
      }
    }
  }

  @media (orientation: portrait) {
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: transparent;
    padding-top: 0;
    div {
      padding: 0 1rem 1rem 1rem;
      gap: 1rem;
    }
    p {
      font-size: 3vh;
      span {
        font-size: 4vh;
      }
    }
  }
  @media (max-height: 465px) and (orientation: landscape) {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    padding-top: 0;

    div {
      display: flex;
      justify-content: center;
      padding: 0 1rem 1rem 1rem;
      gap: 1rem;
    }
    p {
      width: fit-content;
      display: flex;
      font-size: 5vh;
      span {
        font-size: 4vh;
      }
    }
  }
  &.material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px; /* Preferred icon size */
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;

    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;

    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;

    /* Support for IE. */
    font-feature-settings: 'liga';
  }
`;
