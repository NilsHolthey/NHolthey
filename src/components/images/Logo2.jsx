import { useEffect } from 'react';
import { LogoContainer } from '../../UI/LogoContainer';
import { StyledSvg } from '../../UI/StyledSvg';

export default function Logo2() {
  const rotateSvg = () => {
    if (window.scrollY > 50) {
      scrollRotate();
    } else {
      scrollRotateBack();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', rotateSvg);
    return () => {
      window.removeEventListener('scroll', rotateSvg);
    };
  }, []);

  function scrollRotate() {
    let image = document.getElementById('rotate');
    image.style.transform = 'rotate(120deg)';
  }
  function scrollRotateBack() {
    let image = document.getElementById('rotate');
    image.style.transform = 'rotate(-360deg)';
  }
  //   function scrollRotateBack() {
  //     let image = document.getElementById('rotate');
  //     image.style.transform = 'rotate(270)';
  //   }
  return (
    <LogoContainer>
      <StyledSvg
        id="rotate"
        width="5rem"
        height="4rem"
        viewBox="0 0 330 366"
        fill="#CBCBCD"
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
          d="M158 59L270 123.661V252.987L247.471 265.995V149.757L187.884 184.16V300.397L165.356 313.403V184.54L53.6401 119.251L75.8374 106.436L176.264 164.853L236.276 130.205L135.471 72.0067L158 59Z"
          fill="#03A9F4"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M149.261 312.605L126.732 299.599C126.732 268.632 126.732 237.668 126.732 206.703L68.5307 172.688C68.5307 203.791 68.5307 234.892 68.5307 265.995L46.0001 252.987V133.428L149.261 193.775V312.605Z"
          fill="#03A9F4"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M164 53L276 117.661V246.987L253.471 259.995V143.757L193.884 178.16V294.397L171.356 307.403V178.54L59.6401 113.251L81.8374 100.436L182.264 158.853L242.276 124.205L141.471 66.0067L164 53Z"
          fill="#2ECC71"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M155.261 306.605L132.732 293.599C132.732 262.632 132.732 231.668 132.732 200.703L74.5307 166.688C74.5307 197.791 74.5307 228.892 74.5307 259.995L52.0001 246.987V127.428L155.261 187.775V306.605Z"
          fill="#2ECC71"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M159 52L271 116.661V245.987L248.471 258.995V142.757L188.884 177.16V293.397L166.356 306.403V177.54L54.6401 112.251L76.8374 99.436L177.264 157.853L237.276 123.205L136.471 65.0067L159 52Z"
          fill="#E91E63"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M150.261 305.605L127.732 292.599C127.732 261.632 127.732 230.668 127.732 199.703L69.5307 165.688C69.5307 196.791 69.5307 227.892 69.5307 258.995L47.0001 245.987V126.428L150.261 186.775V305.605Z"
          fill="#E91E63"
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
