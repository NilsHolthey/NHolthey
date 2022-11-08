import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 70vw;
  height: 90vh;

  /* color: #f8f8f8; */
  border-radius: 8px;

  background: rgb(39, 44, 57);
  background: linear-gradient(90deg, #272c3978 0%, rgba(39, 44, 57, 0) 63%);
  position: relative;

  @media (max-width: 795px) {
    width: 95vw;

    padding: 0;
  }
`;
