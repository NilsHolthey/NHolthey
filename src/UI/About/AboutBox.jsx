import styled from 'styled-components';

export const AboutBox = styled.article`
  display: flex;
  width: 70%;
  height: 70%;
  flex-wrap: wrap;
  border-bottom: solid 3px #dcdcdc;
  border-right: solid 3px #dcdcdc;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  color: #dcdcdc;
  background-color: #1c2028;
  @media (max-width: 665px) {
    position: relative;
    width: 100%;
    bottom: unset;
    right: unset;
  }
`;
