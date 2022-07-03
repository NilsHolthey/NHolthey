import styled from 'styled-components';

export const AboutImage = styled.img`
  position: absolute;
  z-index: 10;
  max-height: 30%;
  bottom: -2.5rem;
  right: 0;
  border-bottom: solid 2px #d9d9d9;
  @media (max-width: 768px) {
    right: unset;
    bottom: unset;
    top: -2.5rem;
  }
`;
