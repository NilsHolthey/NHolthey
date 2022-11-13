import styled from 'styled-components';

export const BlurDiv = styled.div`
  position: absolute;

  justify-content: center;
  align-items: center;
  top: ${({ top = '' }) => top};
  z-index: ${({ zIndex = '10' }) => zIndex};
  right: ${({ right = '' }) => right};
  bottom: ${({ bottom = '' }) => bottom};
  left: ${({ left = '' }) => left};
  width: ${({ width = '' }) => width};
  height: ${({ height = '' }) => height};
  opacity: ${({ opacity = '0.6' }) => opacity};
  background-color: ${({ backgroundColor = '#6667ab' }) => backgroundColor};
  background-image: linear-gradient(
    125deg,
    rgba(102, 103, 171, 1) 50%,

    rgba(220, 220, 220, 1) 100%
  );

  border-radius: 50%;
  /* background-color: #e261bd74; */

  filter: blur(50px);
  @media (max-width: 765px) {
    right: 0;
    height: 70%;
  }
`;
