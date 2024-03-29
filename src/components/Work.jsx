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
import { ArrowDown } from '../UI/ArrowDown';

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
const icon = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,

    transition: {
      type: 'spring',
      duration: 2.3,
      delay: 1.2,
    },
  },
};
const button = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      type: 'spring',
      duration: 2.8,
      delay: 1.7,
    },
  },
};

export default function Work({ workRef, contactRef }) {
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
  const handleScrollClick = () => {
    contactRef.current.scrollIntoView();
  };
  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && isActive) {
        handelClick();
      }
    },
    [handelClick, isActive]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);
  return (
    <Wrapper id="work" ref={workRef}>
      <Container
        viewport={{ once: true }}
        as={motion.section}
        variants={item}
        initial="hidden"
        whileInView="show"
      >
        <ArrowDown
          href="#contacts"
          onClick={handleScrollClick}
          bottom="0"
          right="50%"
          Background="  rgb(39, 44, 57)"
          BorderColor=" rgb(39, 44, 57)"
          OutlineColor=" rgb(39, 44, 57)"
          as={motion.button}
          viewport={{ once: true }}
          variants={button}
          initial="hidden"
          whileInView="show"
        >
          <motion.span
            className="material-symbols-outlined"
            viewport={{ once: true }}
            variants={icon}
            initial="hidden"
            whileInView="show"
          >
            arrow_downward
          </motion.span>
        </ArrowDown>
        <HeadlineBox>
          <span>03</span>

          <Headline>Work</Headline>
        </HeadlineBox>
        <TextBox>
          <motion.p
            viewport={{ once: true }}
            variants={text}
            initial="hidden"
            whileInView="show"
          >
            Learn to love agile working. My App Didit is a personal task
            manager, with drag and drop functionality. This is the final project
            of an intensive full-time coding bootcamp.
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
          <ScreenShot src="/ScreenShot.webp" />
          <PlayButton handelClick={handelClick} />
        </ImageBox>
      </Container>

      {isActive ? (
        <VideoContainer
          as={motion.section}
          onClick={closeModal}
          ref={modalRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 0.5 }}
        >
          <ModalVideo handelClick={handelClick} />
        </VideoContainer>
      ) : (
        ''
      )}
    </Wrapper>
  );
}
