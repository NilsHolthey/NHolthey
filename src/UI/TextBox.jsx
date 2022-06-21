import styled from 'styled-components';

export const TextBox = styled.section`
  margin-top: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #272c39;
  font-weight: 700;
  font-size: 3rem;
  width: 40vw;
  position: relative;

  blockquote::before {
    position: absolute;
    font-family: 'Utopia-italic';
    top: 50%;
    transform: translate(-65%, -50%);
    content: '"';
    font-size: 200px;
    color: rgba(37, 37, 37, 0.1);
  }
  blockquote::after {
    position: absolute;
    font-family: 'Utopia-italic';
    top: 30%;
    right: 18%;

    content: '"';
    font-size: 200px;
    color: rgba(37, 37, 37, 0.1);
    transform: rotate(180deg);
  }
`;
