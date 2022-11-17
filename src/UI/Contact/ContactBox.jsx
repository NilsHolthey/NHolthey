import styled from 'styled-components';

export const ContactBox = styled.form`
  width: 50%;
  height: 100%;
  flex-direction: column;
  gap: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 765px) {
    width: 100%;
  }
  @media (orientation: portrait) {
    width: 100%;
  }
`;
