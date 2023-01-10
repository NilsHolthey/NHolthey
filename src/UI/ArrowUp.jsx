import styled from 'styled-components';

export const ArrowUp = styled.a`
  position: absolute;
  right: ${({ right = '' }) => right};
  bottom: ${({ bottom = '' }) => bottom};
  left: ${({ left = '' }) => left};
  top: -25%;
  transform: translate(50%, 50%);
  cursor: pointer;
  z-index: 10;
  width: 120px;
  height: 120px;

  @media (max-width: 768px) {
    display: none;
  }
`;
