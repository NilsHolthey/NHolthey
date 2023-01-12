import { motion } from 'framer-motion';

import { ProfileImage } from '../UI/ProfileImage';

export default function ProfileImg() {
  return (
    <ProfileImage
      id="profileImage"
      as={motion.img}
      src="ProfilImage.png"
      alt="profile"
      initial={{ opacity: 0, y: 55 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        bounce: 0.2,
        duration: 2.3,
        delay: 0.5,
      }}
    />
  );
}
