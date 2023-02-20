import styled from 'styled-components';

export const LineOne = styled.p`
  margin: 5px;
  font-size: 4.5rem;
  font-weight: 700;
  display: flex;
  z-index: 15;
  @media (max-width: 765px) and (orientation: landscape) {
    font-size: 2.5rem;
  }
`;
