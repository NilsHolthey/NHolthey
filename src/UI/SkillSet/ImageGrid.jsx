import styled from 'styled-components';

export const ImageGrid = styled.section`
  width: 50%;
  height: 35vw;
  padding: 15px;
  display: grid;

  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  gap: 10px;

  div {
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5));
    box-shadow: -5px -5px 5px #5c5c5c19, 10px 10px 10px rgba(0, 0, 0, 0.4),
      -5px -5px 5px rgba(82, 82, 82, 0.2), 10px 10px 10px rgba(0, 0, 0, 0.4);
    span {
      width: 95%;
      height: 95%;

      display: flex;
      justify-content: center;
      align-items: center;
      width: 92%;
      height: 92%;
      border-radius: 8px;
      background: #262c36;
      box-shadow: inset 5px 5px 10px #20252e, inset -5px -5px 10px #2c333e;
    }
    /* &:hover {
      box-shadow: inset -6px -6px 10px rgba(12, 12, 12, 0.557),
        inset 6px 6px 10px rgba(92, 92, 92, 0.2);
      span {
      }
    } */
  }
  #item-0 {
    grid-row-start: 1;
    grid-column-start: 1;

    grid-row-end: 2;
    grid-column-end: 2;
  }
  #item-1 {
    grid-row-start: 1;
    grid-column-start: 2;

    grid-row-end: 2;
    grid-column-end: 3;
  }
  #item-2 {
    grid-row-start: 2;
    grid-column-start: 1;

    grid-row-end: 4;
    grid-column-end: 3;
  }
  #item-3 {
    grid-row-start: 1;
    grid-column-start: 3;

    grid-row-end: 2;
    grid-column-end: 4;
  }
  #item-4 {
    grid-row-start: 1;
    grid-column-start: 4;

    grid-row-end: 2;
    grid-column-end: 5;
  }
  #item-5 {
    grid-row-start: 2;
    grid-column-start: 3;

    grid-row-end: 3;
    grid-column-end: 4;
  }
  #item-6 {
    grid-row-start: 2;
    grid-column-start: 4;

    grid-row-end: 3;
    grid-column-end: 5;
  }
  #item-7 {
    grid-row-start: 3;
    grid-column-start: 3;

    grid-row-end: 5;
    grid-column-end: 5;
  }
  #item-8 {
    grid-row-start: 4;
    grid-column-start: 2;

    grid-row-end: 5;
    grid-column-end: 3;
  }
  #item-9 {
    grid-row-start: 4;
    grid-column-start: 1;

    grid-row-end: 5;
    grid-column-end: 2;
  }

  @media (max-width: 765px) {
    width: 100%;
    height: 70%;
  }
`;
