import styled from 'styled-components';

export const Button = styled.div`
  position: absolute;
  bottom: 13%;
  left: 53%;
  transform: translate(-50%, -50%);
  width: 5.5rem;
  height: 5.5rem;
  background: var(--greyLight-1);
  box-shadow: 0.3rem 0.3rem 0.6rem var(--greyLight-2),
    -0.2rem -0.2rem 0.5rem var(--white);
  border-radius: 100%;

  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  .circle {
    color: lightgray;
    font-size: 45px;
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
