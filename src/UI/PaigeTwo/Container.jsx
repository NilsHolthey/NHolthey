import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url('/BgLogo.svg');
  height: 100vh;
  width: 100vw;
  background-color: #1c2028;
  background-position: right;
  background-repeat: no-repeat;
  @media (max-width: 665px) {
    height: 180vh;
  }
`;
