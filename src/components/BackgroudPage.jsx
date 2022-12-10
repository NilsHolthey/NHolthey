import { useEffect } from 'react';
import { useState } from 'react';
import LogoForm from '../UI/Contact/LogoForm';
import { BgPage } from './BgPage';

export default function BackgroundPage() {
  const [offsetY, setOffsetY] = useState(0);
  const windowRatio = window.pageYOffset / window.innerHeight;
  const handleScroll = () =>
    setOffsetY((window.pageYOffset / window.innerHeight) * 1000);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  console.log(offsetY, window.innerHeight, windowRatio);
  return (
    <BgPage
      style={{
        background: `linear-gradient( ${
          offsetY * 0.15
        }deg,rgba(220, 220, 220, 1) 51%,rgba(167, 167, 167, 1) 100%`,
      }}
    >
      <LogoForm />
    </BgPage>
  );
}
