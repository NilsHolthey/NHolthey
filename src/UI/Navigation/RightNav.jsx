import { NavUl } from './NavUl';

const RightNav = ({
  open,
  handelClick,
  scrollToHome,
  scrollToAbout,
  scrollToSkill,
  scrollToWork,
  scrollToContact,
}) => {
  const homeClick = () => {
    handelClick();
    scrollToHome();
  };
  const aboutClick = () => {
    handelClick();
    scrollToAbout();
  };
  const skillClick = () => {
    handelClick();
    scrollToSkill();
  };
  const workClick = () => {
    handelClick();
    scrollToWork();
  };
  const contactClick = () => {
    handelClick();
    scrollToContact();
  };
  return (
    <NavUl open={open}>
      <li id="homeLink" onMouseOver={scrollToHome}>
        <span onClick={homeClick}>Home</span>
      </li>
      <li onMouseOver={scrollToAbout}>
        <span onClick={aboutClick}>AboutMe</span>
      </li>
      <li onMouseOver={scrollToSkill}>
        <span onClick={skillClick}>Skillset</span>
      </li>
      <li onMouseOver={scrollToWork}>
        <span onClick={workClick}>Work</span>
      </li>
      <li onMouseOver={scrollToContact}>
        <span onClick={contactClick}>Contacts</span>
      </li>
    </NavUl>
  );
};

export default RightNav;
