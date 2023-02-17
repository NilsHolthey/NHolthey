import Logo2 from '../components/images/Logo2';
import { NavLink } from '../UI/Privacy/NavLink';
import { Nav } from '../UI/Privacy/Nav';
import { Container } from '../UI/Privacy/Container';
import { TextBox } from '../UI/Privacy/TextBox';
import { Wrapper } from '../UI/Privacy/Wrapper';

export default function PrivacyPage() {
  return (
    <>
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
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nicht gestattet. Soweit die
            Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden
            die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
            Dritter als solche gekennzeichnet. <br></br> Sollten Sie trotzdem
            auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um
            einen entsprechenden Hinweis. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            <br></br>
            <br></br>
            <strong>Datenschutz</strong>
            <br></br>
            <br></br>Die Nutzung unserer Webseite ist in der Regel ohne Angabe
            personenbezogener Daten möglich. Soweit auf unseren Seiten
            personenbezogene Daten (beispielsweise Name, Anschrift oder
            eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets
            auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
            Zustimmung nicht an Dritte weitergegeben. <br></br> Wir weisen
            darauf hin, dass die Datenübertragung im Internet (z.B. bei der
            Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
            lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
            möglich. <br></br>
            Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich
            angeforderter Werbung und Informationsmaterialien wird hiermit
            ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich
            ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung
            von Werbeinformationen, etwa durch Spam-Mails, vor.<br></br>
            <br></br>Wir nutzen auf unserer Website Vercel, eine
            Cloud-Deployment-Plattform. Dienstanbieter ist das amerikanische
            Unternehmen Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789.
            Vercel verarbeitet Daten von Ihnen u.a. auch in den USA. Wir weisen
            darauf hin, dass nach Meinung des Europäischen Gerichtshofs derzeit
            kein angemessenes Schutzniveau für den Datentransfer in die USA
            besteht. Dies kann mit verschiedenen Risiken für die Rechtmäßigkeit
            und Sicherheit der Datenverarbeitung einhergehen.Als Grundlage der
            Datenverarbeitung bei Empfängern mit Sitz in Drittstaaten (außerhalb
            der Europäischen Union, Island, Liechtenstein, Norwegen, also
            insbesondere in den USA) oder einer Datenweitergabe dorthin
            verwendet Vercel sogenannte Standardvertragsklauseln (= Art. 46.
            Abs. 2 und 3 DSGVO). Standardvertragsklauseln (Standard Contractual
            Clauses – SCC) sind von der EU-Kommission bereitgestellte
            Mustervorlagen und sollen sicherstellen, dass Ihre Daten auch dann
            den europäischen Datenschutzstandards entsprechen, wenn diese in
            Drittländer (wie beispielsweise in die USA) überliefert und dort
            gespeichert werden. Durch diese Klauseln verpflichtet sich Vercel ,
            bei der Verarbeitung Ihrer relevanten Daten, das europäische
            Datenschutzniveau einzuhalten, selbst wenn die Daten in den USA
            gespeichert, verarbeitet und verwaltet werden. Diese Klauseln
            basieren auf einem Durchführungsbeschluss der EU-Kommission. Sie
            finden den Beschluss und die entsprechenden Standardvertragsklauseln
            u.a. hier:{' '}
            <a
              href="https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de"
              target="_blank"
              rel="noopener nofollow noreferrer"
            >
              https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de
            </a>
            <br></br>
            <br></br>
            <p>
              Die Datenverarbeitungsbedingung (Data Processing Addendum), welche
              den Standardvertragsklauseln entspricht, finden Sie unter{' '}
              <a
                href="https://vercel.com/legal/Vercel_Inc_-_Data_Processing_Addendum.pdf"
                target="_blank"
                rel="follow noopener noreferrer"
              >
                https://vercel.com/legal/Vercel_Inc_-_Data_Processing_Addendum.pdf
              </a>
              . <br></br>
              <br></br>
              Mehr über die Daten, die durch die Verwendung von Vercel
              verarbeitet werden, erfahren Sie in der Privacy Policy auf{' '}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener nofollow noreferrer"
              >
                https://vercel.com/legal/privacy-policy
              </a>
              .
            </p>
          </TextBox>
        </Container>
      </Wrapper>
    </>
  );
}
