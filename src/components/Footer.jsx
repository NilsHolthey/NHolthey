import { StyledFooter } from '../UI/Footer/StyledFooter';

import { NavLink } from '../UI/Footer/NavLink';

export default function Footer() {
  const copyright = new Date().getFullYear();

  return (
    <StyledFooter>
      <p> ©{copyright} Nils Holthey</p>

      <NavLink to="/privacy">Privacy policy</NavLink>
    </StyledFooter>
  );
}
