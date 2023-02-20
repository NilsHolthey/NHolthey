import styled from 'styled-components';

export const Container = styled.section`
  background: rgba(102, 103, 171, 1);
  background: radial-gradient(
    circle,
    rgba(167, 167, 198, 0) 0%,
    rgba(102, 103, 171, 0.4) 100%
  );

  z-index: -2;
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15rem 15rem 0 0;
  transition: all 0.25s ease-out;

  div {
    --speed: 23s;
    --easing: cubic-bezier(0.8, 0.2, 0.2, 0.8);
    opacity: 0.7;
    filter: blur(70px);
    background: #9595be;
    background: linear-gradient(
      90deg,
      rgba(149, 149, 190, 0.8062359943977591) 19%,
      rgba(223, 147, 202, 0.5990371148459384) 59%,
      rgba(183, 183, 205, 0.6046393557422969) 100%
    );
    width: 50vw;
    height: 60vh;
    /* filter: blur(70px); */
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    animation: rotate var(--speed) var(--easing) alternate infinite;

    @keyframes rotate {
      0% {
        transform: rotate(0deg) translate(0%, 0%);
      }

      100% {
        transform: rotate(360deg) translate(100%, 50%);
      }
    }
  }
  @media (orientation: portrait) {
    padding: unset;

    div {
      width: 90vw;
      height: 90vw;
      opacity: 0.9;
    }
  }
`;
