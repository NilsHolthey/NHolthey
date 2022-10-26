import { useEffect } from 'react';
import { useState } from 'react';

import { ContainerShadowBottom } from '../UI/About/ContainerShadowBottom';

export default function ShadowBoxBottom() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  console.log(offsetY);
  return (
    <ContainerShadowBottom
      style={{ transform: `translateY(-${offsetY * 1.25}px)` }}
    ></ContainerShadowBottom>
  );
}
