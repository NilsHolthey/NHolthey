import styled from 'styled-components';

export const TextBox = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: rgb(39, 44, 57);
  background: radial-gradient(circle, #e261bd70 0%, rgba(39, 44, 57, 0) 63%);
  @media (max-width: 765px) {
    width: 100%;
    height: 50%;
  }
`;
