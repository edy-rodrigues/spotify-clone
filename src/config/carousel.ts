import { EmblaOptionsType } from 'embla-carousel';

export const CAROUSEL_OPTIONS: EmblaOptionsType = {
  dragFree: true,
  breakpoints: {
    '(min-width: 1024px)': {
      slidesToScroll: 3,
      watchDrag: false,
    },
    '(min-width: 1280px)': {
      slidesToScroll: 4,
    },
    '(min-width: 1536px)': {
      slidesToScroll: 6,
    },
    '(min-width: 1820px)': {
      slidesToScroll: 7,
    },
    '(min-width: 2560px)': {
      slidesToScroll: 10,
    },
  },
};
