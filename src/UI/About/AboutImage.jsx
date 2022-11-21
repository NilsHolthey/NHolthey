import styled from 'styled-components';

export const AboutImage = styled.img`
  filter: grayscale(85%);
  /* position: absolute; */
  transition: filter 1.2s ease-in-out;
  height: auto;
  width: 70%;
  z-index: 2;
  &:hover {
    filter: grayscale(1%);
  }

  /* @media (max-width: 768px) {
    max-height: 20%;
    bottom: -1.5rem;
    right: -1rem;
    display: none;
  } */
  @media (max-width: 765px) {
    /* width: 40%; */
  }
  @media (orientation: portrait) {
    width: 100%;
    top: 15%;
  }
`;
