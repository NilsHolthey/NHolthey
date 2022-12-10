import GlobalStyle from '../UI/GlobalStyles';

import About from './About';
import BackgroundPage from './BackgroudPage';

import Contact from './Contact';

import MainBg from './PageOne';
// import PageTwo from './PageTwo';

import Skillset from './SkillSet';
import Work from './Work';

export default function MainPage() {
  return (
    <>
      <GlobalStyle />
      <BackgroundPage />
      <MainBg />
      <About />
      <Skillset />
      <Work />
      <Contact />
    </>
  );
}
