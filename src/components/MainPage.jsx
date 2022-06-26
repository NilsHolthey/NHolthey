import GlobalStyle from '../UI/GlobalStyles';
import About from './About';
import MainBg from './mainBG';
import PageTwo from './PageTwo';

export default function MainPage() {
  return (
    <div>
      <GlobalStyle />
      <MainBg />
      <About />
      <PageTwo />
    </div>
  );
}
