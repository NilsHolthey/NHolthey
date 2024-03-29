import styled from 'styled-components';

export const ArrowDown = styled.button`
  span {
    width: 40px;
    height: 40px;
    color: #f8f8f8a1;
    /* outline: 3px solid ${({ OutlineColor = '#dcdcdc' }) => OutlineColor};
    -webkit-outline: 3px solid ${({ OutlineColor = '#dcdcdc' }) =>
      OutlineColor}; */
    border: 2px solid ${({ BorderColor = '#dcdcdc' }) => BorderColor};
    background: ${({ Background = '#dcdcdc' }) => Background};
    filter: drop-shadow(0 0 4px rgba(102, 103, 171, 0.5));
    outline-offset: 4px;
    border-radius: 100%;
    -moz-outline-radius: 100%;
    -webkit-outline-radius: 100%;

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
  right: ${({ right = '' }) => right};
  bottom: ${({ bottom = '' }) => bottom};
  left: ${({ left = '' }) => left};
  transform: translate(50%, 50%);
  cursor: pointer;
  z-index: 100;
  border: none;
  background-color: transparent;
  width: 50px;
  height: 50px;
  border: 3px solid ${({ BorderColor = '#dcdcdc' }) => BorderColor};
  border-radius: 100%;
  filter: drop-shadow(0 0 4px rgba(102, 103, 171, 0.5));

  @media (max-width: 768px) {
    display: none;
  }

  /* animation: bounce 1100ms cubic-bezier(0.7, 0, 1, 1) 3s;

  @keyframes bounce {
    0% {
      transform: translate(50%, 0);
    }
    25% {
    }
    55% {
      transform: translate(50%, -12vh);
    }
    100% {
      transform: translate(50%, 0);
    }
  } */
`;
