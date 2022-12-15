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
  background: rgb(39, 44, 57);
  background: radial-gradient(circle, #e261bd70 0%, rgba(39, 44, 57, 0) 63%);
  position: relative;
  @media (max-width: 765px) {
    width: 100%;
    height: 50%;
  }
  @media (orientation: portrait) {
    width: 100%;
    height: 50%;
  }

  @media (max-width: 765px) and (orientation: landscape) {
    padding: 2rem;
  }
`;
