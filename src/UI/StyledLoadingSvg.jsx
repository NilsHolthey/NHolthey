import styled from 'styled-components';

export const StyledLoadingSvg = styled.svg`
  animation: rotation 3.5s;

  @keyframes rotation {
    to {
      transform: rotate(720deg);
    }
  }
`;
