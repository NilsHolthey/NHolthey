import styled from 'styled-components';

export const Container = styled.section`
  opacity: 1;
  z-index: -2;
  position: fixed;
  width: 100vw;
  /* background: linear-gradient(-45deg, #b7b7cd, #df93ca, #9595be, #ab96bf);
  background-size: 400% 400%;
  animation: gradient 20s ease infinite;
  filter: blur(150px) grayscale(0%); */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15rem 15rem 0 0;
  transition: all 0.25s ease-out;
  div {
    background: rgb(149, 149, 190);
    background: linear-gradient(
      90deg,
      rgba(149, 149, 190, 0.4962359943977591) 19%,
      rgba(223, 147, 202, 0.4990371148459384) 59%,
      rgba(183, 183, 205, 0.5046393557422969) 100%
    );
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    opacity: 0.6;
    --size: 500px;
    --speed: 50s;
    --easing: cubic-bezier(0.8, 0.2, 0.2, 0.8);
    /* opacity: 0.3; */
    width: 50vw;
    height: 60vh;
    filter: blur(calc(var(--size) / 5));

    animation: rotate var(--speed) var(--easing) alternate infinite;
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
  @media (orientation: portrait) {
    padding: unset;
    div {
      width: 90vw;
      height: 90vw;
      opacity: 0.9;
    }
  }

  /* @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  } */
`;
