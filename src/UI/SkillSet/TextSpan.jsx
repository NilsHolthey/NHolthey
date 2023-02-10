import styled from 'styled-components';

export const TextSpan = styled.span`
  /* animation: backgroundSpan 3s linear infinite;
  background: linear-gradient(
    to right,
    var(--font-white),
    var(--violet),
    var(--font-white)
  );
  opacity: 0.5;
  background-size: 200%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent; */

  animation-name: opacity;
  animation-duration: 1.5s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  @keyframes opacity {
    from {
      opacity: 0;
      color: #6667ab;
      scale: 0.9;
    }
    to {
      color: #d1d1d1;
      opacity: 1;
    }
  }

  /* @keyframes backgroundSpan {
    from {
      background-position: 0% center;
    }

    to {
      background-position: -200% center;
    }
  } */
  transition: all 300ms ease;
`;
