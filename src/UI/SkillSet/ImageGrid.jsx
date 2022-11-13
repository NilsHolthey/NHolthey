import styled from 'styled-components';

export const ImageGrid = styled.section`
  width: 50%;
  height: 35vw;
  padding: 15px;
  display: grid;

  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: repeat(3, 1fr);

  gap: 10px;
  @media (max-width: 765px) {
    height: 50%;
    width: 100%;
  }
  @media (orientation: portrait) {
    height: 50%;
    width: 100%;
  }
  div {
    z-index: 3;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5));
    box-shadow: -5px -5px 5px #5c5c5c19, 10px 10px 10px rgba(0, 0, 0, 0.4),
      -5px -5px 5px rgba(82, 82, 82, 0.2), 10px 10px 10px rgba(0, 0, 0, 0.4);
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 92%;
      height: 92%;
      border-radius: 8px;
      background: rgba(22, 26, 32, 0);
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
  }
  #item-1 {
  }
  #item-2 {
  }
  #item-3 {
  }
  #item-4 {
  }
  #item-5 {
  }
  #item-6 {
  }
  #item-7 {
  }
  #item-8 {
  }
  #item-9 {
  }
`;
