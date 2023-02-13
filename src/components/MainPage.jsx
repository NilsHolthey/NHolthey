import { useRef } from 'react';
// import { BgTest } from '../UI/BgTest';
import GlobalStyle from '../UI/GlobalStyles';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import MainBg from './PageOne';
import Skillset from './SkillSet';
import SvgBackgroud from './SvgBackgroud';
import Work from './Work';

export default function MainPage() {
  const scrollRef = useRef(null);
  const homeRef = useRef(null);
  const skillRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <GlobalStyle />
      <SvgBackgroud />
      {/* <BgTest>
        <section>
          <div></div>
        </section>
      </BgTest> */}
      <MainBg scrollRef={scrollRef} homeRef={homeRef} />
      <About aboutRef={scrollRef} skillRef={skillRef} />
      <Skillset skillRef={skillRef} workRef={workRef} />
      <Work workRef={workRef} contactRef={contactRef} />
      <Contact contactRef={contactRef} homeRef={homeRef} />
      <Footer />
    </>
  );
}
