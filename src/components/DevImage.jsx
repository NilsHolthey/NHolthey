import { motion } from 'framer-motion';

import { DevImg } from '../UI/DevImg';
import { Imagebox } from '../UI/Imagebox';

export default function DevImage() {
  return (
    <Imagebox>
      <DevImg
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
    </Imagebox>
  );
}
