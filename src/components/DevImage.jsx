import { motion } from 'framer-motion';
import { DeveloperImg } from '../UI/DeveloperImg';

import { DevImg } from '../UI/DevImg';
import { Imagebox } from '../UI/Imagebox';

export default function DevImage() {
  return (
    <Imagebox>
      <DeveloperImg
        id="devImg"
        src="DEVELOPER.png"
        as={motion.img}
        initial={{ opacity: 0.1, scale: 0.6 }}
        animate={{ opacity: 0.06, scale: 1 }}
        transition={{
          type: 'spring',
          bounce: 0.2,
          duration: 2,
        }}
      />
      <DevImg
        id="devImg"
        src="DEV.png"
        as={motion.img}
        initial={{ opacity: 0.1, scale: 0.6 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{
          type: 'spring',
          bounce: 0.2,
          duration: 2,
        }}
      />
    </Imagebox>
  );
}
