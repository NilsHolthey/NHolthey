import GlobalStyle from '../UI/GlobalStyles';
import About from './About';
import Contact from './Contact';
import MainBg from './PageOne';
// import PageTwo from './PageTwo';
import PrevWork from './PrevWork';
import Skillset from './SkillSet';

export default function MainPage() {
  return (
    <>
      <GlobalStyle />
      <MainBg />
      <About />
      {/* <PageTwo /> */}
      <Skillset />
      <PrevWork />
      <Contact />
    </>
  );
}
