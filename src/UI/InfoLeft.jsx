import styled from 'styled-components';

export const InfoLeft = styled.div`
  position: fixed;
  cursor: pointer;
  z-index: 10;
  align-items: center;
  gap: 1rem;
  left: 1rem;
  bottom: 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    left: 0;
    background-color: #1c2028;
    opacity: 0.7;
    height: 3rem;
    bottom: 0;
  }
`;
