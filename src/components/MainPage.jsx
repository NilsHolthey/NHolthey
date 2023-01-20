import GlobalStyle from '../UI/GlobalStyles';

import About from './About';
// import BackgroundPage from './BackgroudPage';

import Contact from './Contact';

import MainBg from './PageOne';
// import PageTwo from './PageTwo';

import Skillset from './SkillSet';
import SvgBackgroud from './SvgBackgroud';
import Work from './Work';

export default function MainPage() {
  return (
    <>
      <GlobalStyle />
      <SvgBackgroud />
      {/* <BackgroundPage /> */}
      <MainBg />
      <About />
      <Skillset />
      <Work />
      <Contact />
    </>
  );
}
