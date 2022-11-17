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
  background: transparent;
  cursor: pointer;
  box-shadow: 7px 7px 20px 2px rgba(0, 0, 0, 0.2),
    -7px -7px 20px 2px rgba(102, 103, 171, 0.4),
    -1px -1px 4px 2px rgba(102, 103, 171, 0.4);
  transition: background 0.1s ease-in-out;
  &.pressed {
    box-shadow: inset 4px 4px 10px rgba(0, 0, 0, 0.5),
      inset -2px -2px 8px rgba(1, 69, 16, 0.3), inset -4px -4px 10px #02361390;

    border: 1px solid #191919;
    transition: all 0.3s ease-in-out;
  }
  &:active {
    box-shadow: inset 5px 5px 8px 1px rgba(0, 0, 0, 0.2),
      inset -5px -5px 8px 0px rgba(102, 103, 171, 0.3),
      inset -1px -2px 2px 0px rgba(102, 103, 171, 0.4);
    background: rgba(25, 29, 36, 0.973);
  }
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
