import styled from 'styled-components';

export const ProfileImage = styled.img`
  z-index: 1;
  max-height: 100vh;
  transition: all 300ms;
  height: 85vh;
  filter: grayscale(10%);
  padding-bottom: 3rem;

  @media (max-width: 768px) {
    height: 75vh;
  }
`;
