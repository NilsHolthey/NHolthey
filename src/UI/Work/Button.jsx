import styled from 'styled-components';

export const Button = styled.div`
  position: absolute;
  bottom: 14%;
  left: 53%;
  transform: translate(-50%, -50%);
  width: 11vh;
  height: 11vh;
  background: var(--greyLight-1);
  transition: all 0.3s ease-in;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1),
    -10px -10px 10px rgba(255, 255, 255, 0.6);
  border-radius: 50%;

  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  .circle {
    color: lightgray;
    font-size: 45px;
  }
  &:active {
    box-shadow: inset 10px 10px 10px rgba(0, 0, 0, 0.1),
      inset -10px -10px 10px rgba(232, 231, 231, 0.6);
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
