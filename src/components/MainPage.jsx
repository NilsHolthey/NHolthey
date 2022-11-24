import LogoForm from '../UI/Contact/LogoForm';

import GlobalStyle from '../UI/GlobalStyles';
import About from './About';
import { BgPage } from './BgPage';
import Contact from './Contact';

import MainBg from './PageOne';
// import PageTwo from './PageTwo';

import Skillset from './SkillSet';
import Work from './Work';

export default function MainPage() {
  return (
    <>
      <GlobalStyle />
      <BgPage>
        <LogoForm />
      </BgPage>
      <MainBg />
      <About />
      <Skillset />
      <Work />
      <Contact />
    </>
  );
}
