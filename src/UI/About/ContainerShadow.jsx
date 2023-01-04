import styled from 'styled-components';

export const ContainerShadow = styled.section`
  height: 100dvh;
  width: 100dvw;
  position: fixed;
  animation: zIndex 2s;
  overflow: hidden;
  @keyframes zIndex {
    from {
      z-index: 100000002;
    }
    to {
      z-index: 0;
    }
  }

  /* display: flex;
  align-items: flex-end; */

  div:nth-child(1) {
    width: 50%;
    height: 50%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgb(39, 44, 57);

    transform: translateX(-120%);
    animation: moveLeft 1.5s;
    z-index: 100000002;
    @keyframes moveLeft {
      from {
        transform: translateX(0%);
        opacity: 1;
      }
      to {
        transform: translateX(-120%);
        opacity: 0.9;
        display: none;
      }
    }
  }

  div:nth-child(2) {
    width: 50%;
    height: 50%;
    position: absolute;
    right: 0;
    top: 0;
    background-color: rgb(39, 44, 57);
    z-index: 100000002;
    transform: translatey(-120%);
    animation: moveUp 1.5s;

    @keyframes moveUp {
      from {
        transform: translatey(0%);
        opacity: 1;
      }
      to {
        transform: translatey(-120%);
        opacity: 0.9;
        display: none;
      }
    }
  }
  div:nth-child(3) {
    width: 50%;
    height: 50%;
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: rgb(39, 44, 57);
    z-index: 100000002;
    animation: moveRight 1.5s;
    transform: translateX(120%);
    @keyframes moveRight {
      from {
        transform: translateX(-0%);
        opacity: 1;
      }
      to {
        transform: translateX(120%);
        opacity: 0.9;
        display: none;
      }
    }
  }
  div:nth-child(4) {
    width: 50%;
    height: 50%;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: rgb(39, 44, 57);
    z-index: 100000002;
    transform: translateY(120%);
    animation: moveDown 1.5s;

    @keyframes moveDown {
      from {
        transform: translateY(0%);
        opacity: 1;
      }
      to {
        transform: translateY(120%);
        opacity: 0.9;
        display: none;
      }
    }
  }
`;
