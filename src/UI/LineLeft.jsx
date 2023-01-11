import styled from 'styled-components';

export const LineLeft = styled.div`
  margin-right: 0.2rem;
  height: 7rem;
  width: 0.12rem;
  background-color: #f8f8f8;

  @media (max-width: 768px) {
    display: none;
  }
  @media (orientation: portrait) {
    display: none;
  }
`;
