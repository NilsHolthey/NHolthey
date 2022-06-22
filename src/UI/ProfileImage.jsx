import styled from 'styled-components';

export const ProfileImage = styled.img`
  z-index: 1;
  max-height: 100vh;

  @media (max-width: 550px) {
    overflow-y: hidden;
    position: absolute;
  }
`;
