import styled from 'styled-components';

export const AboutImage = styled.img`
  position: sticky;
  top: 1;

  z-index: 11116;
  max-height: 30%;

  border-bottom: solid 3px #d9d9d9;
  border-radius: 2px;

  @media (max-width: 768px) {
    max-height: 20%;
    bottom: -1.5rem;
    right: -1rem;
  }
`;
