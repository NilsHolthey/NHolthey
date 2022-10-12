import { LogoContainer } from './LogoContainer';
import { StyledSvg } from './StyledSvg';

export default function LogoForm() {
  return (
    <LogoContainer>
      <StyledSvg
        id="rotate"
        width="90rem"
        height="90rem"
        viewBox="0 0 330 366"
        fill="#dcdcdc"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#272C39"
      >
        <path
          d="M169.344 11.3079L318.344 99.8926C320.921 101.425 322.5 104.201 322.5 107.199V259.453C322.5 262.461 320.911 265.244 318.321 266.773L169.321 354.739C166.655 356.313 163.345 356.313 160.679 354.739L11.6787 266.773C9.08904 265.244 7.5 262.461 7.5 259.453V107.199C7.5 104.201 9.07928 101.425 11.6562 99.8926L160.656 11.3079C163.333 9.71624 166.667 9.71624 169.344 11.3079Z"
          strokeWidth="15"
          strokeLinejoin="round"
        />

        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M161 56L273 120.661V249.987L250.471 262.995V146.757L190.884 181.16V297.397L168.356 310.403V181.54L56.6401 116.251L78.8374 103.436L179.264 161.853L239.276 127.205L138.471 69.0067L161 56Z"
          fill="#272C39"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M152.261 309.605L129.732 296.599C129.732 265.632 129.732 234.668 129.732 203.703L71.5307 169.688C71.5307 200.791 71.5307 231.892 71.5307 262.995L49.0001 249.987V130.428L152.261 190.775V309.605Z"
          fill="#272C39"
        />
      </StyledSvg>
    </LogoContainer>
  );
}