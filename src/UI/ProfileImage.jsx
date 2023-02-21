import styled from 'styled-components';

export const ProfileImage = styled.img`
  z-index: 10;
  max-height: 100vh;
  transition: opacity 300ms;
  height: 85%;
  width: auto;
  filter: grayscale(30%) drop-shadow(10px 15px 20px rgb(114, 113, 113));
  opacity: ${({ isScrolled }) => (isScrolled ? '0 ' : '1')};

  padding-bottom: 3rem;
  transition: opacity 2s ease;
  @media (max-width: 768px) {
    height: 75vh;
  }

  @media (max-height: 785px) and (orientation: landscape) {
    height: 90%;
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1) {
  }
`;
