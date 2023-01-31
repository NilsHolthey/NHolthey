import styled from 'styled-components';

export const ProfileImage = styled.img`
  z-index: 10;
  max-height: 100vh;
  transition: all 300ms;
  height: 85%;
  filter: grayscale(30%) drop-shadow(10px 15px 20px rgb(114, 113, 113));
  opacity: ${({ isScrolled }) => (isScrolled ? '0 ' : '1')};

  padding-bottom: 3rem;
  transition: opacity 2s ease;
  @media (max-width: 768px) {
    height: 75vh;
  }
`;
