import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useState } from 'react';
import SvgIcon from '../UI/icons';
import { LineOne } from '../UI/LineOne';
import { LineTwo } from '../UI/LineTwo';
import { QuoteL } from '../UI/QuoteL';
import { QuoteR } from '../UI/QuoteR';
import { TextBox } from '../UI/TextBox';

export default function TexBoxHook() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <TextBox
      id="textbox"
      style={{ transform: `translateY(-${offsetY * 1.25}px)` }}
    >
      <QuoteL>
        <SvgIcon
          variant="quoteOpen"
          size="5rem"
          color="lightgrey"
          strokeWidth="0"
        />
      </QuoteL>
      <LineOne
        as={motion.p}
        initial={{ opacity: 0, y: 50 }}
        transition={{
          type: 'spring',
          duration: 2.8,
          delay: 0.8,
          bounce: 0.1,
        }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Hi there,
      </LineOne>
      <LineTwo
        as={motion.p}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 0.8 }}
        transition={{
          type: 'spring',
          bounce: 0.2,
          duration: 2,
          delay: 1.3,
        }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        lets create something new!
      </LineTwo>
      <QuoteR>
        <SvgIcon
          variant="quoteClose"
          size="5rem"
          color="lightgrey"
          strokeWidth="0"
        />
      </QuoteR>
    </TextBox>
  );
}
