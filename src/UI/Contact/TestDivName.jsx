import styled from 'styled-components';

export const TestDivName = styled.div`
  width: 70%;

  &.ad-textbox {
    position: relative;
  }

  &.ad-textbox > .underline {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #6667ab;
    transform: scaleX(0);
    transition: 0.35s;
  }

  &.ad-textbox > span,
  &.ad-textbox > label {
    position: absolute;
    pointer-events: none;
    translate: 0 -50%;
    color: rgba(255, 255, 255, 0.5);
    transition: 0.35s;
  }

  &.ad-textbox > span {
    top: 50%;
    left: 0;
  }

  &.ad-textbox > label {
    top: 50%;
    left: 34px;
    white-space: nowrap;
  }

  &.ad-textbox > input {
    height: 60px;
    width: 100%;
    padding-left: 34px;
    background: transparent;
    border: 0;
    outline: none;
    border-bottom: 2px solid rgba(255, 255, 255, 0.5);
    color: rgba(255, 255, 255, 0.96);

    font-size: 16px;
  }

  &.ad-textbox > :is(input:focus, input.has-valueName) ~ span {
    color: rgba(255, 255, 255, 0.96);
  }

  &.ad-textbox > :is(input:focus, input.has-valueName) ~ label {
    color: #6667ab;
  }

  &.ad-textbox > :is(input:focus, input.has-valueName) ~ label {
    translate: -42px -44px;
    scale: 0.875;
  }

  &.ad-textbox > :is(input:focus, input.has-valueName) ~ .underline {
    transform: scaleX(1);
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
