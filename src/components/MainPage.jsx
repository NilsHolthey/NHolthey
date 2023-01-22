import GlobalStyle from '../UI/GlobalStyles';
import About from './About';
import Contact from './Contact';
import MainBg from './PageOne';
import Skillset from './SkillSet';
import SvgBackgroud from './SvgBackgroud';
import Work from './Work';

export default function MainPage() {
  return (
    <>
      <GlobalStyle />
      <SvgBackgroud />
      <MainBg />
      <About />
      <Skillset />
      <Work />
      <Contact />
    </>
  );
}
