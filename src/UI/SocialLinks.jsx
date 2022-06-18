import styled from 'styled-components';

export const SocialLink = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 4px;
  border-radius: 100%;
  width: 40px;
  height: 40px;

  &:hover {
    background-color: #6667ab;
    outline: 2px solid #6667ab;
    outline-offset: 4px;
    transition: ease-in 0.3s;
  }
`;
