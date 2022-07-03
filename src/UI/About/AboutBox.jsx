import styled from 'styled-components';

export const AboutBox = styled.article`
  display: flex;
  width: 80%;
  height: 80%;
  flex-wrap: wrap;
  border-bottom: solid 5px #dcdcdc;
  border-right: solid 5px #dcdcdc;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -2rem;
  right: -2rem;
  color: #dcdcdc;
  background-color: #272c39;
  @media (max-width: 665px) {
    position: relative;
    width: 100%;
    bottom: unset;
    right: unset;
  }
`;
