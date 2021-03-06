import styled from 'styled-components';

export const BoxContainer = styled.section`
  width: 60vw;
  height: 80vh;
  display: grid;
  padding-top: 2rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 665px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 1rem;
    height: 150vh;
    width: 70vw;
  }

  /* @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
  } */
`;
