import styled from 'styled-components';

export const InfoBox = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  /* clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%); */
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  /* transform: translateY(110%); */
  transition: all 500ms ease-in-out;
  color: #272c39;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-family: 'Fjalla One', sans-serif;
  text-align: left;
  scale: 0;
  opacity: 0;
  &:hover {
    opacity: 1;

    /* transform: translateY(0); */
  }

  ul {
    list-style: none;

    padding: unset;

    li {
      font-weight: bolder;
    }
    li:before {
      content: '';
      height: 0.8rem;
      width: 0.8rem;
      display: block;
      float: left;
      margin-top: 0.3rem;
      margin-left: -1.5rem;

      background-repeat: no-repeat;

      background: url('/Logo.svg');
      background-size: cover;
      background-position: center;
    }
  }
  @media (max-width: 765px) {
    font-size: 1rem;
  }
`;
