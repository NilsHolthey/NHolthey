import styled from 'styled-components';

export const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  gap: 0.5rem;
  transition: scale 500ms ease-in-out;
  li {
    &.contacts {
      background-color: #6667abcf;
      outline: 2px solid #6667abb1;
      outline-offset: 3px;
      transition: ease-in 0.3s;
      gap: 0.7rem;
    }
  }
  /* li:nth-child(1) {
    animation: pulse 2.5s ease-in-out 3.5s;
  }
  li:nth-child(2) {
    animation: pulse 2.5s ease-in-out 3.1s;
  }
  li:nth-child(3) {
    animation: pulse 2.5s ease-in-out 2.7s;
  }
  li:nth-child(4) {
    animation: pulse 2.5s ease-in-out 2.3s;
  }
  li:nth-child(5) {
    animation: pulse 2.5 ease-in-out 1.9s;
    @media (min-width: 770px) {
      display: none;
    }
  }

  @-webkit-keyframes pulse {
    0% {
      -webkit-box-shadow: 0 0 0 0 rgba(102, 103, 171, 0.4);
    }
    70% {
      -webkit-box-shadow: 0 0 0 10px rgba(102, 103, 171, 0);
    }
    100% {
      -webkit-box-shadow: 0 0 0 0 rgba(102, 103, 171, 0);
    }
  }
  @keyframes pulse {
    0% {
      -moz-box-shadow: 0 0 0 0 rgba(102, 103, 171, 0.4);
      box-shadow: 0 0 0 0 rgba(102, 103, 171, 0.4);
    }
    70% {
      -moz-box-shadow: 0 0 0 10px rgba(102, 103, 171, 0);
      box-shadow: 0 0 0 10px rgba(102, 103, 171, 0);
      background-color: rgba(102, 103, 171, 0.8);
    }
    100% {
      -moz-box-shadow: 0 0 0 0 rgba(102, 103, 171, 0);
      box-shadow: 0 0 0 0 rgba(102, 103, 171, 0);
    }
  } */
  @media (max-width: 768px) {
    flex-direction: row;
    display: flex;
    justify-content: center;
    margin: 5px;
    list-style: none;
    padding: 0;
    gap: 1.5rem;
    z-index: 100;
  }
`;
