import { Headline } from '../UI/About/Headline';
import { BlurDiv } from '../UI/PrevWork/BlurDiv';

import { HeadlineBox } from '../UI/About/HeadlineBox';
import { Container } from '../UI/Work/Container';
import { ImageBox } from '../UI/Work/ImageBox';
import { ScreenShot } from '../UI/Work/SreenShot';
import { TextBox } from '../UI/Work/TextBox';
import { Wrapper } from '../UI/Work/Wrapper';
import ModalVideo from './ModalVideo';
import { VideoContainer } from '../UI/Work/VideoContainer';
import { useCallback, useEffect, useRef, useState } from 'react';
import PlayButton from '../UI/Work/PlayButton';
import SvgIcon from '../UI/icons';
import { motion } from 'framer-motion';

const text = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,

    transition: {
      type: 'spring',
      duration: 1.3,
      delay: 0.7,
    },
  },
};
const item = {
  hidden: { opacity: 0, y: 90 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 1.8,
    },
  },
};
const item2 = {
  hidden: { opacity: 0, x: 90 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      duration: 1.8,
    },
  },
};

export default function Work() {
  const [isActive, setIsActive] = useState(false);

  function handelClick() {
    setIsActive(!isActive);
    changeOverflow();
  }

  function changeOverflow() {
    if (isActive == false) {
      changeToFixed();
    } else {
      reset();
    }
  }

  function changeToFixed() {
    let pageWrapper = document.body;
    pageWrapper.style.overflowY = 'hidden';
  }
  function reset() {
    let pageWrapper = document.body;
    pageWrapper.style.overflowY = '';
  }
  const modalRef = useRef();
  const closeModal = e => {
    if (modalRef.current === e.target) {
      handelClick();
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && isActive) {
        handelClick();
        console.log('I pressed');
      }
    },
    [handelClick, isActive]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);
  return (
    <Wrapper id="work">
      <Container
        viewport={{ once: true }}
        as={motion.section}
        variants={item}
        initial="hidden"
        whileInView="show"
      >
        <HeadlineBox>
          <span>03</span>

          <Headline>My Work</Headline>
        </HeadlineBox>
        <TextBox>
          <motion.p
            viewport={{ once: true }}
            variants={text}
            initial="hidden"
            whileInView="show"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa porro
            perspiciatis amet dignissimos! In, facere repellendus cum est sit
            eius.{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/NilsHolthey/capstone-project"
            >
              sourcecode:
              <SvgIcon
                strokeWidth="2"
                variant="github"
                size="2.2vh"
                color="none"
              />
            </a>
          </motion.p>
        </TextBox>
        <ImageBox
          viewport={{ once: true }}
          as={motion.section}
          variants={item2}
          initial="hidden"
          whileInView="show"
        >
          <BlurDiv
            width="40%"
            height="80%"
            bottom="10%"
            right="5%"
            opacity="0.6"
            zIndex="0"
          />
          <ScreenShot src="/ScreenShot.png" />
          <PlayButton handelClick={handelClick} />
        </ImageBox>
      </Container>

      {isActive ? (
        <VideoContainer onClick={closeModal} ref={modalRef}>
          <ModalVideo handelClick={handelClick} />
        </VideoContainer>
      ) : (
        ''
      )}
    </Wrapper>
  );
}
