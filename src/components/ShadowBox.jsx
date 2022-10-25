import { useEffect } from 'react';
import { useState } from 'react';
import { ContainerShadow } from '../UI/About/ContainerShadow';

export default function ShadowBox() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <ContainerShadow
      style={{ transform: `translateY(-${offsetY * 1.25}px)` }}
    ></ContainerShadow>
  );
}
