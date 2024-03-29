import styled from 'styled-components';

export const SpinnerWrapper = styled.div`
  position: relative;
  width: 120px;
  height: 120px;

  display: flex;
  justify-content: center;
  align-items: center;
  div {
    position: absolute;
    /* right: 50%;
    bottom: 50%; */

    opacity: 0.5;
    width: 80px;
    height: 80px;
    /* margin: -75px 0 0 -75px; */
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #dcdcdc;

    animation: spin 1.7s linear infinite;
    z-index: 11;
    &:before {
      content: '';
      position: absolute;
      top: 5px;
      left: 5px;
      right: 5px;
      bottom: 5px;
      border-radius: 50%;
      border: 3px solid transparent;
      border-top-color: #dcdcdc;
      animation: spin-reverse 0.6s linear infinite;
    }

    &:after {
      content: '';
      position: absolute;
      top: 15px;
      left: 15px;
      right: 15px;
      bottom: 15px;
      border-radius: 50%;
      border: 3px solid transparent;
      border-top-color: #dcdcdc;
      border-right-color: #dcdcdc;
      animation: spin 1.5s linear infinite;
    }
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    @keyframes spin-reverse {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(-360deg);
      }
    }
  }

  span {
    position: relative;

    color: #f8f8f8a1;

    border: 2px solid ${({ BorderColor = '#dcdcdc' }) => BorderColor};
    background: ${({ Background = '' }) => Background};
    filter: drop-shadow(0 0 4px rgba(102, 103, 171, 0.5));
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
`;
