import styled from 'styled-components';

export const Headline = styled.h3`
  color: #f8f8f8;
  padding: 1rem;
  font-weight: 900;
  position: absolute;
  top: -6rem;
  z-index: 1;
  @media (orientation: landscape) {
    top: 0;
  }
`;
