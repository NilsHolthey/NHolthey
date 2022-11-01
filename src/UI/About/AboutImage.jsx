import styled from 'styled-components';

export const AboutImage = styled.img`
  position: absolute;
  bottom: 2rem;
  filter: grayscale(85%);
  transition: filter 1.2s ease-in-out;
  height: auto;
  width: 40%;
  z-index: 14;
  &:hover {
    filter: grayscale(1%);
  }

  /* @media (max-width: 768px) {
    max-height: 20%;
    bottom: -1.5rem;
    right: -1rem;
    display: none;
  } */
`;
