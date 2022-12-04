import styled from 'styled-components';

export const ProfileImage = styled.img`
  z-index: 1;
  max-height: 100vh;
  transition: all 300ms;
  height: 75vh;
  filter: grayscale(10%);

  @media (max-width: 768px) {
    height: 75vh;
  }
`;
