import { useEffect, useState } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  cursor: pointer;
  justify-content: space-around;
  align-items: flex-end;
  flex-flow: column nowrap;
  backdrop-filter: blur(2px);
  @media (orientation: portrait) {
    top: 1.5rem;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? '#ccc' : '#f8f8f8')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
      width: 1.5rem;
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
  @media (orientation: portrait) {
    right: 3vw;
  }
`;

const Burger = ({
  scrollToHome,
  scrollToAbout,
  scrollToSkill,
  scrollToWork,
  scrollToContact,
}) => {
  const [open, setOpen] = useState(false);

  const changeDisplay = () => {
    if (window.scrollY > 50) {
      changeToHidden();
    } else {
      resetDisply();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeDisplay);
    return () => {
      window.removeEventListener('scroll', changeDisplay);
    };
  }, []);

  function changeOverflow() {
    if (open == false) {
      changeToFixed();
    } else {
      reset();
    }
  }

  function changeToFixed() {
    let body = document.body;
    body.style.overflowY = 'hidden';
  }
  function reset() {
    let body = document.body;
    body.style.overflowY = '';
  }
  function changeToHidden() {
    let burger = document.getElementById('burger');

    burger.style.display = 'flex';
  }
  function resetDisply() {
    let burger = document.getElementById('burger');
    burger.style.display = 'none';
  }
  function handelClick() {
    setOpen(!open);
    changeOverflow();
  }

  return (
    <>
      <StyledBurger id="burger" open={open} onClick={handelClick}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav
        open={open}
        setOpen={setOpen}
        handelClick={handelClick}
        scrollToSkill={scrollToSkill}
        scrollToHome={scrollToHome}
        scrollToAbout={scrollToAbout}
        scrollToWork={scrollToWork}
        scrollToContact={scrollToContact}
      />
    </>
  );
};

export default Burger;
