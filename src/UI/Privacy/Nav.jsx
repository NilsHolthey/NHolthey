import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  padding-top: 2vh;
  padding-bottom: 2vh;
  left: 0;
  width: 100vw;
  height: 5rem;
  opacity: 1;
  background-color: transparent;
  z-index: 15;
  @media (orientation: portrait) {
    top: 0.5rem;
  }

  .material-symbols-outlined {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 34px; /* Preferred icon size */
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
