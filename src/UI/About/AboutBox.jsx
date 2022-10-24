import styled from 'styled-components';

export const AboutBox = styled.article`
  display: flex;
  width: 80%;
  height: 80%;
  flex-wrap: wrap;
  /* border-bottom: solid 5px #dcdcdc;
  border-right: solid 5px #dcdcdc; */
  padding: 1rem;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -2rem;
  right: -2rem;
  z-index: 5;
  color: #dcdcdc;
  /* background-color: #1c2028;
  box-shadow: -5px -5px 0px 0px #272c39; */
  border-radius: 9px;
  background: linear-gradient(225deg, #191d24, #1e222b);
  box-shadow: -25px 25px 20px #15181e, 25px -25px 52px #232832;
  @media (max-width: 665px) {
    position: relative;
    width: 100%;
    height: 100%;
    bottom: unset;
    right: unset;
    box-shadow: unset;
  }
`;
