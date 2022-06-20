import SvgIcon from '../UI/icons';
import { InfoLeft } from '../UI/InfoLeft';
import { InfoRight } from '../UI/InfoRight';
import { LineLeft } from '../UI/LineLeft';
import { LinkList } from '../UI/LinkList';
import { Mail } from '../UI/Mail';
import { LineRight } from '../UI/PaigeTwo/LineRight';
import { ProfileContainer } from '../UI/ProfileContainer';
import { ProfileImage } from '../UI/ProfileImage';
import { SocialLink } from '../UI/SocialLinks';
import DevSvg from './DevSvg';
import Navbar from './Navbar';

export default function MainBg() {
  return (
    <section>
      <Navbar />
      <ProfileContainer>
        <InfoRight>
          <Mail href="mailto:nils.holthey@gmx.de">nils.holthey@gmx.de</Mail>
          <LineRight></LineRight>
        </InfoRight>
        <InfoLeft>
          <LinkList>
            <SocialLink>
              <a hreff="#">
                <SvgIcon variant="github" size="28px" color="none" />
              </a>
            </SocialLink>
            <SocialLink>
              <a hreff="#">
                <SvgIcon
                  variant="instagram"
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
                <SvgIcon variant="twitter" size="28px" color="none" />
              </a>
            </SocialLink>
          </LinkList>
          <LineLeft></LineLeft>
        </InfoLeft>

        <div></div>
        <DevSvg />
        <ProfileImage src="Profilegreyish.png" alt="profile" />
      </ProfileContainer>
    </section>
  );
}
