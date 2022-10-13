import styled from 'styled-components';

export const ProfileImage = styled.img`
  z-index: 1;
  max-height: 100vh;
  transition:all 300ms;
  @media (max-width: 768px) {
    height: 80vh;
  }
`;
