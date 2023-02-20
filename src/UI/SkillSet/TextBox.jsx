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

  @media (orientation: portrait) {
    width: 100%;
    height: fit-content;
    display: flex;
    z-index: 2;
    flex-wrap: wrap;
  }

  @media (max-width: 965px) and (orientation: landscape) {
    width: 50%;
    height: 100%;
    display: flex;
    z-index: 2;
    flex-wrap: wrap;
  }
`;
