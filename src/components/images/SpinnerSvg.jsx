import styled from 'styled-components';

export default function SpinnerSvg({ isActive }) {
  return (
    <StyledSvg
      className={`${isActive ? 'animation' : ''}`}
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <OuterCircle cx="40" cy="40" r="38.5" stroke="#ebe9e9" strokeWidth="3" />
      <InnerCircle cx="40" cy="40" r="30.5" stroke="#ebe9e9" strokeWidth="2" />
      <path
        d="M38.0858 57.4214C38.8668 58.2024 40.1332 58.2024 40.9142 57.4214L53.6421 44.6934C54.4232 43.9124 54.4232 42.6461 53.6421 41.865C52.8611 41.084 51.5948 41.084 50.8137 41.865L39.5 53.1787L28.1863 41.865C27.4052 41.084 26.1389 41.084 25.3579 41.865C24.5768 42.6461 24.5768 43.9124 25.3579 44.6934L38.0858 57.4214ZM37.5 20.9929L37.5 56.0071L41.5 56.0071L41.5 20.9929L37.5 20.9929Z"
        fill="#ebe9e9"
      />
    </StyledSvg>
  );
}

const StyledSvg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  scale: 0.8;
  transform: translate(-50%, -50%);

  &.animation {
    circle:nth-child(1) {
      animation: rotate2 1.5s ease-in-out;
    }
    circle:nth-child(2) {
      animation: spin 1.5s ease-in-out;
    }
  }
`;
const InnerCircle = styled.circle`
  stroke-dasharray: 110;
  stroke-width: 3;
  stroke-dashoffset: 190;

  filter: drop-shadow(0 0 4px #ebe9e9);

  @keyframes rotate2 {
    to {
      stroke-dashoffset: -80;
    }
  }
`;
const OuterCircle = styled.circle`
  stroke-dasharray: 170;
  stroke-width: 3;
  stroke-dashoffset: 20;

  filter: drop-shadow(0 0 5px #ebe9e9);
  @keyframes spin {
    to {
      stroke-dashoffset: -120;
    }
  }
`;
