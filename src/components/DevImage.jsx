import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useState } from 'react';

import { DevImg } from '../UI/DevImg';
import { Imagebox } from '../UI/Imagebox';

export default function DevImage() {
  const [changeSrc, setChangeSrc] = useState(false);
  const MediaQuerry = () => {
    if (window.innerWidth < 480) {
      setChangeSrc(true);
    } else {
      setChangeSrc(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', MediaQuerry);
    return () => {
      window.removeEventListener('resize', MediaQuerry);
    };
  }, []);

  return (
    <Imagebox>
      <DevImg
        id="devImg"
        src={changeSrc ? 'DEV.png ' : 'DEVELOPER.png'}
        as={motion.img}
        initial={{ opacity: 0.1, scale: 0.6 }}
        animate={{ opacity: 0.06, scale: 1 }}
        transition={{
          type: 'spring',
          bounce: 0.2,
          duration: 2,
        }}
      />
    </Imagebox>
  );
}
