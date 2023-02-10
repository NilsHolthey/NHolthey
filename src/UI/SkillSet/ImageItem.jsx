import styled from 'styled-components';

export const ImageItem = styled.div`
  &:hover {
    scale: 0.99;
  }
  cursor: pointer;
  min-width: 50px;
  min-height: 50px;

  z-index: 3;
  transition: box-shadow 500ms ease, scale 300ms ease;
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
    /* background: rgba(22, 25, 31, 0.708); */

    box-shadow: inset 10px 10px 10px #20252e, inset -10px -10px 10px #2d333c;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:nth-child(1) {
    img {
      filter: grayscale(80%) drop-shadow(0 0 4px rgb(220, 220, 220));
    }
  }
  &:nth-child(3) {
    img {
      filter: grayscale(100%) drop-shadow(-8px -8px 8px rgb(220, 220, 220));
    }
  }
  &:nth-child(4) {
    img {
      transform: rotate(30deg);
    }
  }
  &:nth-child(6) {
    img {
      filter: grayscale(75%) drop-shadow(0 0 8px rgb(220, 220, 220));
    }
  }
  &:nth-child(7) {
    img {
      filter: grayscale(50%) drop-shadow(0 0 9px rgb(220, 220, 220));
    }
  }
  &:nth-child(9) {
    img {
      width: 50%;
      filter: grayscale(70%) drop-shadow(0 0 8px rgb(220, 220, 220));
    }
  }
  &:nth-child(10) {
    img {
      width: 55%;
    }
  }
  &:nth-child(11) {
    img {
      filter: grayscale(50%) drop-shadow(0 0 8px rgb(220, 220, 220));
    }
  }
  &:nth-child(12) {
    img {
      width: 20%;
      filter: grayscale(50%) drop-shadow(0 0 8px rgb(220, 220, 220));
    }
  }
  &:nth-child(13) {
    img {
      filter: grayscale(50%) drop-shadow(0 0 8px rgb(220, 220, 220));
    }
  }
  &:nth-child(14) {
    img {
      width: 50%;
      filter: grayscale(50%) drop-shadow(0 0 8px rgb(220, 220, 220));
    }
  }
`;
