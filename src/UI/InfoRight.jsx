import styled from 'styled-components';

export const InfoRight = styled.div`
  position: fixed;
  cursor: pointer;
  z-index: 10;
  align-items: center;
  gap: 1.5rem;
  right: 1rem;
  bottom: 0;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    display: none;
  }
`;
