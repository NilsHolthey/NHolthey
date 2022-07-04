import styled from 'styled-components';

export const AboutImage = styled.img`
  position: absolute;
  z-index: 10;
  max-height: 30%;
  bottom: -2.5rem;
  right: 0;
  border-bottom: solid 2px #d9d9d9;
  @media (max-width: 768px) {
    max-height: 20%;
    bottom: -1.5rem;
    right: -1rem;
  }
`;
