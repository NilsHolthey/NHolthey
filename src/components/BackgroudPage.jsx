import { useEffect } from 'react';
import { BgPage } from './BgPage';

export default function BackgroundPage() {
  const changeColor = () => {
    if (window.scrollY >= window.innerHeight * 4 - 200) {
      changeToFive();
    } else if (window.scrollY >= window.innerHeight * 3 - 200) {
      resetDisply();
    } else if (window.scrollY >= window.innerHeight * 2) {
      changeNoThree();
    } else if (window.scrollY >= window.innerHeight) {
      changeToHidden();
    } else {
      resetDisply();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeColor);
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  function changeToHidden() {
    let MyBg = document.getElementById('bgPage');
    MyBg.style.opacity = '0.4';
    MyBg.style.backgroundImage = 'url("/blurry-gradient-haikei4.png")';
  }
  function resetDisply() {
    let MyBg = document.getElementById('bgPage');
    MyBg.style.backgroundImage = 'url("/blurry-gradient-haikei1.png")';
    MyBg.style.opacity = '0.4';
  }
  function changeToFive() {
    let MyBg = document.getElementById('bgPage');
    MyBg.style.backgroundImage = 'url("/blurry-gradient-haikei5.png")';
    MyBg.style.opacity = '0.4';
  }
  function changeNoThree() {
    let MyBg = document.getElementById('bgPage');
    MyBg.style.backgroundImage = 'url("/blurry-gradient-haikei3.png")';
    MyBg.style.opacity = '0.2';
  }
  return <BgPage id="bgPage"></BgPage>;
}
