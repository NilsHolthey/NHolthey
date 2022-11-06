import styled from 'styled-components';

export const Hexagon = styled.div`
  position: absolute;
  top: ${({ top = '' }) => top};
  right: ${({ right = '' }) => right};
  width: 7.7rem;
  height: 7rem;
  background-color: #ffffffc8;
  -webkit-clip-path: polygon(75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%, 25% 0);
  clip-path: polygon(75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%, 25% 0);

  animation-name: floating;
  animation-duration: ${({ duration = '' }) => duration};
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  @keyframes floating {
    from {
      transform: translate(0, 0px);
    }
    65% {
      transform: translate(0, 10px);
    }
    to {
      transform: translate(0, -0px);
    }
  }
`;
