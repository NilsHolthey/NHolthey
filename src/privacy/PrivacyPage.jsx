import Logo2 from '../components/images/Logo2';
import { NavLink } from '../UI/Privacy/NavLink';
import { Nav } from '../UI/Privacy/Nav';
import { Container } from '../UI/Privacy/Container';
import { TextBox } from '../UI/Privacy/TextBox';
import { Wrapper } from '../UI/Privacy/Wrapper';

export default function PrivacyPage() {
  return (
    <Wrapper>
      <Nav>
        <NavLink to="/main">
          <Logo2 />
        </NavLink>
        <NavLink to="/main">
          <span className="material-symbols-outlined">arrow_back</span>go back
        </NavLink>
      </Nav>
      <div></div>
      <Container>
        <TextBox>
          <strong>Haftungsausschluss:</strong>
          <br></br>
          <br></br>
          <br></br>
          <strong>Urheberrecht</strong>
          <br></br>
          <br></br>Die durch die Seitenbetreiber erstellten Inhalte und Werke
          auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die
          Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
          außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
          Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien
          dieser Seite sind nicht gestattet. Soweit die Inhalte auf dieser Seite
          nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
          beachtet. Insbesondere werden Inhalte Dritter als solche
          gekennzeichnet. <br></br> Sollten Sie trotzdem auf eine
          Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
          <br></br>
          <br></br>
          <strong>Datenschutz</strong>
          <br></br>
          <br></br>Die Nutzung unserer Webseite ist in der Regel ohne Angabe
          personenbezogener Daten möglich. Soweit auf unseren Seiten
          personenbezogene Daten (beispielsweise Name, Anschrift oder
          eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets
          auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
          Zustimmung nicht an Dritte weitergegeben. <br></br> Wir weisen darauf
          hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation
          per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz
          der Daten vor dem Zugriff durch Dritte ist nicht möglich. <br></br>
          Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich
          angeforderter Werbung und Informationsmaterialien wird hiermit
          ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich
          ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung
          von Werbeinformationen, etwa durch Spam-Mails, vor.
        </TextBox>
      </Container>
    </Wrapper>
  );
}
