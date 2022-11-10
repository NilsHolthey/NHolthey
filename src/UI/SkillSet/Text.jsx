import styled from 'styled-components';
export const Text = styled.p`
  margin: 0;
  width: 80%;
  font-weight: bolder;
  font-size: 1.8rem;
  font-family: 'Fjalla One', sans-serif;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  color: #d1d1d1;
  span {
    animation-name: opacity;

    animation-duration: 1.5s;
    animation-iteration-count: 1;

    animation-timing-function: ease-in-out;
    @keyframes opacity {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    transition: all 300ms ease;
  }
`;
