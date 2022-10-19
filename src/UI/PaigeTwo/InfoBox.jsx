import styled from 'styled-components';

export const InfoBox = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(197, 196, 196, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transform: translateY(100%);
  transition: all 300ms;
  color: #f8f8f8;

  ul {
    padding: unset;
    color: #f8f8f8;

    li {
      font-size: 1.5rem;
    }
  }
`;
