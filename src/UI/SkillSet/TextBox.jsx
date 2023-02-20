import styled from 'styled-components';

export const TextBox = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  z-index: 2;
  flex-wrap: wrap;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  background: rgba(25, 29, 36, 0.965);
  background: radial-gradient(circle, #e261bd70 0%, rgba(39, 44, 57, 0) 63%);
  position: relative;
  overflow: hidden;

  @media (orientation: portrait) {
    width: 100%;
    height: fit-content;
    min-height: 60%;
    display: flex;
    z-index: 2;
    flex-wrap: wrap;

    box-shadow: inset 0 1px 10px 2px #e261bd70, 0 3px 2px 0px #111318;
  }

  @media (max-width: 965px) and (orientation: landscape) {
    width: 50%;
    height: 100%;
    display: flex;
    z-index: 2;
    flex-wrap: wrap;
  }
`;
