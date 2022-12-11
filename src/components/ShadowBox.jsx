import { motion } from 'framer-motion';
import { ContainerShadow } from '../UI/About/ContainerShadow';
import { Shadow } from '../UI/Shadow';
import { Shadow2 } from '../UI/Shadow2';

export default function ShadowBox() {
  return (
    <ContainerShadow>
      <Shadow
        as={motion.div}
        initial={{ opacity: 0.8, scale: 0.5 }}
        animate={{ opacity: 0, scale: 1.5 }}
        transition={{
          type: 'spring',
          bounce: 0.2,
          duration: 2.5,
        }}
      />
      <Shadow2
        as={motion.div}
        initial={{ opacity: 0.5, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1.5 }}
        transition={{
          type: 'spring',
          bounce: 0.2,
          duration: 2.5,
        }}
      />
    </ContainerShadow>
  );
}
