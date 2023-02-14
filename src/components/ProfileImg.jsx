import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useState } from 'react';

// import { useEffect } from 'react';

import { ProfileImage } from '../UI/ProfileImage';

export default function ProfileImg() {
  const [isScrolled, setIsScrolled] = useState(false);
  const changeOpacity = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', function () {
      changeOpacity();
    });

    return () => {
      window.removeEventListener('scroll', changeOpacity);
    };
  }, []);

  return (
    <ProfileImage
      id="profileImage"
      as={motion.img}
      src="ProfileImgFullOpacity.png"
      alt="profile"
      isScrolled={isScrolled}
      initial={{ y: 255 }}
      animate={{ y: 0 }}
      transition={{
        type: 'spring',
        bounce: 0.2,
        duration: 1.8,
        delay: 0.5,
      }}
    />
  );
}
