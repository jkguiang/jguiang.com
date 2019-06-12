import posed from 'react-pose';

// Animations cued by UI interactions
const Bubble = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
  },
  press: {
    scale: 1.05,
  }
});


// Animations for large pieces of content
const RoutesContainer = posed.div({
    hidden: {
      opacity: 1,
      beforeChildren: 25,
      delay: 25
    },
    visible: { opacity: 1 }
});

const ContentContainer = posed.div({
  visible: { staggerChildren: 50 }
});

const SwingLeftContent = posed.div({
  visible: { x: 0, opacity: 1 },
  hidden: { x: 50, opacity: 0 }
});

const SwingRightContent = posed.div({
  visible: { x: 0, opacity: 1 },
  hidden: { x: -50, opacity: 0 }
});

const FadeContent = posed.div({
  visible: { opacity: 1, delay: 300 },
  hidden: { opacity: 0 }
});

const FastFadeContent = posed.div({
  visible: { opacity: 1, delay: 50 },
  hidden: { opacity: 0 }
});

export { Bubble, RoutesContainer,
         ContentContainer, SwingLeftContent,
         SwingRightContent, FadeContent,
         FastFadeContent
       };
