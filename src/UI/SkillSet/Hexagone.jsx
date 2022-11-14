import styled from 'styled-components';

export const Hexagon = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: ${({ top = '' }) => top};
  right: ${({ right = '' }) => right};
  width: ${({ width = '' }) => width};
  height: ${({ height = '' }) => height};
  background-color: #ffffffc8;
  border-radius: 50%;
  background-color: #6667ab;
  box-shadow: inset -25px -15px 40px rgba(0, 0, 0, 0.5);
  background-image: linear-gradient(
    -45deg,
    rgba(255, 255, 220, 0.5) 0%,
    transparent 100%
  );
  transition: border-radius 1.2s ease-in-out 0.5s, right 0.9s ease-out,
    width 1.2s ease-out 0.8s;
  opacity: 0;
  z-index: 1;
  @media (max-width: 765px) {
    display: none;
  }
  div {
    /* width: 100%;
    background-color: #8485b037;
    height: 100%;
    position: absolute;
    border-radius: 100%;
    box-shadow: inset -25px -15px 40px rgba(0, 0, 0, 0.1);
    background-image: linear-gradient(
      -45deg,
      rgba(255, 255, 220, 0.1) 0%,
      transparent 100%
    ); */
  }

  /*  */

  animation-name: floating;

  animation-duration: ${({ duration = '' }) => duration};
  animation-iteration-count: infinite;

  animation-timing-function: ease-in-out;
  @keyframes floating {
    from {
      transform: translate(0, 0px);
      filter: blur(0);
    }
    65% {
      transform: translate(-0.1px, 15px);
      filter: blur(2px);
    }
    to {
      transform: translate(0, -0px);
      filter: blur(0);
    }
  }
`;