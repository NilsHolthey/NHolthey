import styled from 'styled-components';

export const TextContainer = styled.div`
  display: flex;
  width: 50vw;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 20%;
  margin-left: 5%;

  @media (max-width: 550px) {
    position: absolute;
    bottom: 0;
    width: 100vw;
    left: 5%;
  }
`;
