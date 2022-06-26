import SvgIcon from '../UI/icons';
import { ImageContainer } from '../UI/ImageContainer';
import { InfoLeft } from '../UI/InfoLeft';
import { InfoRight } from '../UI/InfoRight';
import { LineLeft } from '../UI/LineLeft';
import { LineOne } from '../UI/LineOne';
import { LineTwo } from '../UI/LineTwo';
import { LinkList } from '../UI/LinkList';
import { Mail } from '../UI/Mail';
import MailSvg from '../UI/MailSvg';
import { LineRight } from '../UI/PaigeTwo/LineRight';
import { ProfileContainer } from '../UI/ProfileContainer';
import { ProfileImage } from '../UI/ProfileImage';
import { ProfileWrapper } from '../UI/Profilewrapper';
import { QuoteL } from '../UI/QuoteL';
import { QuoteR } from '../UI/QuoteR';

import { SocialLink } from '../UI/SocialLinks';
import { TextBox } from '../UI/TextBox';
import { TextContainer } from '../UI/TextContainer';
import DevSvg from './DevSvg';
import Navbar from './Navbar';

export default function MainBg() {
  return (
    <ProfileWrapper id="home">
      <Navbar />
      <InfoRight>
        <Mail href="mailto:nils.holthey@gmx.de">nils.holthey@gmx.de</Mail>
        <LineRight></LineRight>
      </InfoRight>
      <InfoLeft>
        <LinkList>
          <SocialLink>
            <a hreff="#">
              <SvgIcon
                strokeWidth="2"
                variant="github"
                size="28px"
                color="none"
              />
            </a>
          </SocialLink>
          <SocialLink>
            <a hreff="#">
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
            <a hreff="#">
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
            <a hreff="#">
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

      <DevSvg />
      <ProfileContainer>
        <TextContainer>
          <TextBox>
            <QuoteL>
              <SvgIcon
                variant="quoteOpen"
                size="5rem"
                color="lightgrey"
                strokeWidth="0"
              />
            </QuoteL>
            <LineOne>Hi there,</LineOne>
            <LineTwo>lets create something new!</LineTwo>
            <QuoteR>
              <SvgIcon
                variant="quoteClose"
                size="5rem"
                color="lightgrey"
                strokeWidth="0"
              />
            </QuoteR>
          </TextBox>
        </TextContainer>
        <ImageContainer>
          <ProfileImage src="Profilegrey1.png" alt="profile" />
        </ImageContainer>
      </ProfileContainer>
    </ProfileWrapper>
  );
}
