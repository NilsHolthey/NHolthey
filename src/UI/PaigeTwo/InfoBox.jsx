import styled from 'styled-components';

export const InfoBox = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: grey;
  opacity: 0.5;
  transform: translateY(100%);
  transition: all 500ms;
  &:hover {
    transform: translateY(0);
  }
`;
