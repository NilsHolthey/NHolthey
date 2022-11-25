import styled from 'styled-components';

export const ProfileImage = styled.img`
  z-index: 1;
  max-height: 100vh;
  transition: all 300ms;
  height: 80vh;
  filter: grayscale(20%);

  @media (max-width: 768px) {
    height: 80vh;
  }
`;
