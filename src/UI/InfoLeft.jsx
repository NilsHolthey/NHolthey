import styled from 'styled-components';

export const InfoLeft = styled.div`
  position: fixed;
  cursor: pointer;
  z-index: 1000;
  align-items: center;

  left: 1rem;
  bottom: 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    left: 0;
    background-color: #1c2028;
    opacity: 0.8;
    height: 3.5rem;
    bottom: 0;
  }

  @media (min-width: 900px) {
    scale: 1;
    bottom: 0;
    left: 1rem;
  }
  @media (orientation: portrait) {
    width: 100%;
    left: 0;
    background-color: #1c2028;
    opacity: 0.8;
    height: 4.5rem;
    bottom: 0;
    padding-bottom: 2rem;
  }
`;
