import styled from 'styled-components';

export const SubmitButton = styled.button`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  height: 56px;
  width: 200px;
  padding: 0 22px;
  border: 0;
  border-radius: 28px;
  font-family: 'Fjalla One', sans-serif;
  color: #f7f7f7;
  background: #6667ab;
  cursor: pointer;

  &.text {
    display: block;
    white-space: nowrap;
    font-size: 17px;
    font-weight: 600;
  }

  &.icon {
    font-size: 30px;
  }

  &.sending .text {
    animation: textAnimation 5.1s both;
  }

  /* &.sending .icon {
    animation: iconAnimation 5s both;
  } */

  @keyframes textAnimation {
    0%,
    30% {
      translate: 0 0;
    }
    39.9% {
      translate: 0 100px;
    }
    40% {
      translate: 0 100px;
    }
    40.1% {
      translate: 0 -60px;
    }
    40.2% {
      translate: 0 -60px;
    }
    45% {
      translate: 0 0;
    }
    95% {
      translate: 0 0;
    }
    100% {
      translate: 0 0;
    }
  }

  @keyframes iconAnimation {
    0%,
    5% {
      translate: 0 0;
    }
    20%,
    30% {
      translate: -250px 0;
    }
    40% {
      translate: 200px 0;
      scale: 2;
    }
    40.1% {
      translate: 200px -60px;
      scale: 1;
    }
    40.2% {
      translate: 34px -60px;
    }
    45%,
    95% {
      translate: 34px 0;
    }
    100% {
      translate: 0 0;
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
