import { motion } from 'framer-motion';
// import { useEffect } from 'react';
// import { useState } from 'react';
import { Container } from '../UI/Contact/Container';
import { Footer } from '../UI/Contact/Footer';
// import { Form } from '../UI/Contact/Form';

// import LogoForm from '../UI/Contact/LogoForm';
import { Wrapper } from '../UI/Contact/Wrapper';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { Headline } from '../UI/About/Headline';
import { HeadlineBox } from '../UI/About/HeadlineBox';
import { InfoRight } from '../UI/InfoRight';
import { Mail } from '../UI/Mail';
import { LineRight } from '../UI/PaigeTwo/LineRight';
import { InfoLeft } from '../UI/InfoLeft';
import { LinkList } from '../UI/LinkList';
import { SocialLink } from '../UI/SocialLinks';
import SvgIcon from '../UI/icons';
import { LineLeft } from '../UI/LineLeft';
import MailSvg from '../UI/MailSvg';
import { ContactBox } from '../UI/Contact/ContactBox';
import { useState } from 'react';
import { TestDiv } from '../UI/Contact/TestDiv';
import { TestDivName } from '../UI/Contact/TestDivName';
import { TestDivTextarea } from '../UI/Contact/TestDivTextarea';
import { SubmitButton } from '../UI/Contact/SubmitButton';
import { FormModal } from '../UI/Contact/FormModal';
import { TextBox } from '../UI/Contact/TextBox';

const item = {
  hidden: { opacity: 0, y: 70 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 1.6,
    },
  },
};

export default function Contact() {
  const copyright = new Date().getFullYear();
  const form = useRef();

  const [valueName, setValueName] = useState();
  const [valueMessage, setValueMessage] = useState();
  const [value, setValue] = useState('');

  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChangeName = e => {
    setValueName(e.target.value);
    console.log(valueName);
  };
  const handleChangeMail = e => {
    setValue(e.target.value);
    console.log(value);
  };
  const handleChangeMessage = e => {
    setValueMessage(e.target.value);
    console.log(value);
  };

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_qi1lc4r',
        'template_nzntalt',
        form.current,
        'K8UPqxtkHCh1EeJSp'
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    handleClick();
    e.target.reset();
  };

  const handleClick = () => {
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setTimeout(() => setIsSent(false), 2500);
    }, 2000);
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   sendEmail();

  //   e.target.reset();
  // };

  return (
    <>
      <Wrapper id="contacts">
        <InfoRight>
          <Mail href="mailto:nils.holthey@gmx.de">nils.holthey@gmx.de</Mail>
          <LineRight></LineRight>
        </InfoRight>
        <InfoLeft>
          <LinkList>
            <SocialLink>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/NilsHolthey"
              >
                <SvgIcon
                  strokeWidth="2"
                  variant="github"
                  size="28px"
                  color="none"
                />
              </a>
            </SocialLink>
            <SocialLink>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/nholthey"
              >
                <SvgIcon
                  strokeWidth="2"
                  variant="instagram"
                  strokeLinecap="round"
                  size="28px"
                  color="none"
                  line={<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>}
                  rect={
                    <rect
                      fill="none"
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                  }
                />
              </a>
            </SocialLink>
            <SocialLink>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://codepen.io/NHolthey"
              >
                <SvgIcon
                  strokeWidth="2"
                  size="28px"
                  color="none"
                  polygon={
                    <polygon
                      fill="none"
                      points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"
                    ></polygon>
                  }
                  polyline={
                    <polyline
                      fill="none"
                      points="22 8.5 12 15.5 2 8.5"
                    ></polyline>
                  }
                  polyline2={
                    <polyline
                      fill="none"
                      points="2 15.5 12 8.5 22 15.5"
                    ></polyline>
                  }
                  line={<line x1="12" y1="22" x2="12" y2="15.5"></line>}
                  line2={<line x1="12" y1="2" x2="12" y2="8.5"></line>}
                />
              </a>
            </SocialLink>
            <SocialLink>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/nholthey"
              >
                <SvgIcon
                  variant="twitter"
                  size="28px"
                  color="none"
                  strokeWidth="2"
                />
              </a>
            </SocialLink>
            <SocialLink>
              <a hreff="#">
                <MailSvg />
              </a>
            </SocialLink>
          </LinkList>
          <LineLeft></LineLeft>
        </InfoLeft>
        {isSending || isSent ? <FormModal /> : ''}
        <Container>
          <HeadlineBox>
            <span>04</span>
            <Headline>Contact Me</Headline>
          </HeadlineBox>
          <TextBox>
            <div>
              <p>Love to hear from you, </p>
              <p>
                Get in touch{' '}
                <span className="icon material-icons">waving_hand</span>
              </p>
            </div>
          </TextBox>
          <ContactBox
            ref={form}
            onSubmit={sendEmail}
            viewport={{ once: true }}
            as={motion.form}
            variants={item}
            initial="hidden"
            whileInView="show"
          >
            <TestDivName className="ad-textbox">
              <input
                onChange={handleChangeName}
                className={`${valueName ? 'has-valueName' : ''}`}
                id="textbox"
                type="text"
                name="user_name"
                required
              />
              <span className="material-icons">person_outline</span>
              <label htmlFor="textbox">Name</label>
              <div className="underline" />
            </TestDivName>
            <TestDiv className="ad-textbox">
              <input
                onChange={handleChangeMail}
                className={`${value ? 'has-value' : ''}`}
                id="email"
                type="email"
                name="user_email"
                required
              />
              <span className="material-icons">alternate_email</span>
              <label htmlFor="email">Email Address</label>
              <div className="underline" />
            </TestDiv>
            <TestDivTextarea className="ad-textbox">
              <textarea
                rows="5"
                cols="33"
                onChange={handleChangeMessage}
                className={`${valueMessage ? 'has-valueName' : ''}`}
                id="message"
                name="message"
                required
              />
              <span className="material-icons">mail_outline</span>
              <label htmlFor="message">Message</label>
              <div className="underline" />
            </TestDivTextarea>

            <SubmitButton
              type="submit"
              value="Send"
              className={isSending || isSent ? 'sending pressed' : ''}
              style={{
                fontWeight: isSent ? 'bolder' : '',
                backgroundColor:
                  (isSent ? ' #042c10' : '') || (isSending ? ' #6667ab' : ''),
                boxShadow: isSending
                  ? 'inset 4px 4px 10px rgba(0, 0, 0, 0.5),inset -2px -2px 8px rgba(59, 48, 77, 0.3), inset -4px -4px 10px #ccc8cf90'
                  : '',
              }}
            >
              <span className="icon material-icons">
                {isSent ? 'check' : ''}
              </span>
              <span className="text">
                {isSending ? 'Sending ...' : isSent ? 'Sent' : 'Send Message'}
                {/* {isSending ? 'Sending ...' : isSent ? 'Sent' : 'Send Message'} */}
              </span>
            </SubmitButton>
          </ContactBox>
        </Container>
      </Wrapper>
      <Footer>
        <p> ©{copyright} Nils Holthey</p>
      </Footer>
    </>
  );
}
