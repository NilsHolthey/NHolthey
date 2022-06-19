import styled from 'styled-components';

export const LineLeft = styled.div`
  margin-right: 0.2rem;
  height: 7rem;
  width: 0.1rem;
  background-color: #f8f8f8;
  &::after {
    margin-right: 0.2rem;
    content: '';
    position: absolute;
    bottom: 0;
    left: 1rem;
    animation: fill 0.5s ease-in-out 2.1s;
    height: 7rem;
    width: 0.2rem;
    transform: scaleY(0);
    transform-origin: bottom center;
    background-color: #6667ab;
    z-index: 1;
    transition: transform 0.6s;
  }
  &:hover::after {
    transform: scaleY(1);
  }

  @keyframes fill {
    to {
      transform: scaleY(1);
    }
  }
`;
