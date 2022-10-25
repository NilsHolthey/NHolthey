import styled from 'styled-components';

export const AboutBox = styled.article`
  font-weight: bolder;
  display: flex;
  width: 60%;
  height: 100%;
  flex-wrap: wrap;
  /* border-bottom: solid 5px #dcdcdc;
  border-right: solid 5px #dcdcdc; */
  padding: 1rem;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -2rem;
  right: -2rem;
  font-size: 1.2rem;
  z-index: 5;
  overflow: hidden;
  /* background-color: #1c2028;
  box-shadow: -5px -5px 0px 0px #272c39; */
  border-radius: 9px;
  background: linear-gradient(225deg, #191d24, #1e222b);
  box-shadow: -25px 25px 20px #15181e, 25px -25px 52px #232832;

  p {
    background-image: linear-gradient(
      125deg,
      rgba(102, 103, 171, 1) 0%,
      rgba(226, 97, 190, 1) 49%,
      rgba(220, 220, 220, 1) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  @media (max-width: 665px) {
    position: relative;
    width: 100%;
    height: 100%;
    bottom: unset;
    right: unset;
    box-shadow: unset;
  }
`;
