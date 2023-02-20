import styled from 'styled-components';

export const AboutBox = styled.article`
  font-weight: bolder;
  display: flex;
  width: 50%;
  height: 100%;
  flex-wrap: wrap;
  /* border-bottom: solid 5px #dcdcdc;
  border-right: solid 5px #dcdcdc; */
  padding: 1.5rem;
  justify-content: center;
  align-items: center;

  font-size: 1.8vh;
  z-index: 5;

  /* background-color: #1c2028;
  box-shadow: -5px -5px 0px 0px #272c39; */

  /* box-shadow: -15px 15px 20px #15181e, 15px -15px 52px #232832;
  transition: width 1000ms ease-in-out, bottom 1000ms ease-in-out,
    right 1000ms ease-in-out; */

  @media (max-width: 765px) {
    font-size: 1.1rem;
    position: relative;
    border-radius: 0;
    width: 100%;
    height: 60%;
    background: rgba(25, 29, 36, 0);
  }
  @media (orientation: portrait) {
    font-size: 2vh;
    padding: 2.5rem;
    position: relative;
    border-radius: 0;
    width: 100%;
    height: fit-content;
    background: rgba(25, 29, 36, 0);
  }

  @media (max-width: 765px) and (orientation: landscape) {
    font-size: 1rem;
  }
`;
