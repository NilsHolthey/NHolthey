import styled from 'styled-components';

export const BgTest = styled.div`
  background-color: #151718;
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  section {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
    height: 70%;
    filter: blur(180px);
    div {
      opacity: 0.6;
      width: 50%;
      height: 50%;

      background: conic-gradient(
          from 180deg at 50% 50%,
          #0aefff -69.37deg,
          #0f83ff 31.88deg,
          #b056e7 120deg,
          #ff9966 204.37deg,
          #0aefff 290.63deg,
          #0f83ff 391.87deg
        ),
        #a84ddf;
    }
  }
`;
