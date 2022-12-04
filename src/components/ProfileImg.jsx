import { motion } from 'framer-motion';

import { ProfileImage } from '../UI/ProfileImage';

export default function ProfileImg() {
  return (
    <ProfileImage
      id="profileImage"
      as={motion.img}
      src="ProfilImage.png"
      alt="profile"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.75 }}
      transition={{
        type: 'spring',
        bounce: 0.2,
        duration: 1.1,
      }}
    />
  );
}
