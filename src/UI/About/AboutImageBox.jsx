import styled from 'styled-components';

export const AboutImageBox = styled.article`
  font-weight: bolder;
  display: flex;
  width: 50%;
  height: 100%;
  flex-wrap: wrap;
  /* border-bottom: solid 5px #dcdcdc;
  border-right: solid 5px #dcdcdc; */
  padding: 1rem;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 2rem;
  left: 0;
  font-size: 1.2rem;
  z-index: 5;
  overflow: hidden;
  /* background-color: #1c2028;
  box-shadow: -5px -5px 0px 0px #272c39; */
  border-radius: 8px 0 0 8px;
  background: rgba(25, 29, 36, 0.965);
  /* box-shadow: 6px 6px 24px #1b1e27;
  transition: width 1000ms ease-in-out, bottom 1000ms ease-in-out,
    right 1000ms ease-in-out; */

  @media (max-width: 765px) {
    position: absolute;
    border-radius: 0;
    width: 100%;
    height: 100%;
    bottom: 0;
    right: 0;
  }
`;
