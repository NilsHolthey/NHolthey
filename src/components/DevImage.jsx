import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useState } from 'react';
import { DevImg } from '../UI/DevImg';
import { Imagebox } from '../UI/Imagebox';

export default function DevImage() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <Imagebox style={{ transform: `translateY(${offsetY * 0.35}px)` }}>
      <DevImg
        id="devImg"
        src="DEVELOPER.png"
        as={motion.img}
        initial={{ opacity: 0.1, scale: 0.6 }}
        animate={{ opacity: 0.04, scale: 1 }}
        transition={{
          type: 'spring',
          bounce: 0.2,
          duration: 2,
        }}
      />
    </Imagebox>
  );
}
