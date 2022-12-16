import styled from 'styled-components';

export const ArrowDown = styled.a`
  span {
    color: #f8f8f8;
    outline: 3px solid #f8f8f8;
    border: 2px solid #f8f8f8;
    outline-offset: 4px;
    border-radius: 100%;
    &.material-symbols-outlined {
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
  }
  position: absolute;
  left: 50%;
  bottom: 2%;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    display: none;
  }
`;
