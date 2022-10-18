import GlobalStyle from '../UI/GlobalStyles';
import About from './About';
import Contact from './Contact';
import MainBg from './mainBG';
import PageTwo from './PageTwo';
import PrevWork from './PrevWork';

export default function MainPage() {
  return (
    <>
      <GlobalStyle />
      <MainBg />
      <About />
      <PageTwo />
      <PrevWork />
      <Contact />
    </>
  );
}
