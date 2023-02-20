import styled from 'styled-components';

export const ImageGrid = styled.section`
  width: 50%;
  height: 35vw;
  max-height: 800px;
  padding: 15px;
  display: grid;
  padding: 2rem;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: repeat(3, 1fr);
  position: relative;
  gap: 15px 10px;
  @media (max-width: 765px) {
    height: 50%;
    width: 100%;
  }
  @media (orientation: portrait) {
    max-height: 50%;
    width: 100%;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 965px) and (orientation: landscape) {
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(3, 1fr);
    width: 50%;
    padding: 0 2rem 0 2rem;
  }
`;
