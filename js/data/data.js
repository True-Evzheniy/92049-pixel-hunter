import {ANSWERS} from '../constants.js';

export const QUESTION_TYPES = {
  SINGLE: `single`,
  DOUBLE: `double`,
  TRIPLE: `triple`
};

export const questions = Object.freeze({
  [QUESTION_TYPES.DOUBLE]: {
    title: `Угадайте для каждого изображения фото или рисунок?`,
    options: [{src: `https://k42.kn3.net/CF42609C8.jpg`, correctAnswer: ANSWERS.PAINT}, {src: `http://i.imgur.com/1KegWPz.jpg`, correctAnswer: ANSWERS.PHOTO}]
  },
  [QUESTION_TYPES.SINGLE]: {
    title: `Угадай, фото или рисунок?`,
    options: [{src: `https://k42.kn3.net/D2F0370D6.jpg`, correctAnswer: ANSWERS.PAINT}]
  },
  [QUESTION_TYPES.TRIPLE]: {
    title: `Найдите рисунок среди изображений`,
    options: [{src: `https://k32.kn3.net/5C7060EC5.jpg`}, {src: `https://i.imgur.com/DiHM5Zb.jpg`}, {src: `http://i.imgur.com/DKR1HtB.jpg`}],
    correctAnswer: 0
  }
});

export const levels = [
  QUESTION_TYPES.TRIPLE,
  QUESTION_TYPES.DOUBLE,
  QUESTION_TYPES.SINGLE,
  // QUESTION_TYPES.DOUBLE,
  // QUESTION_TYPES.SINGLE,
  // QUESTION_TYPES.TRIPLE,
  // QUESTION_TYPES.DOUBLE,
  // QUESTION_TYPES.SINGLE,
  // QUESTION_TYPES.TRIPLE,
  // QUESTION_TYPES.DOUBLE
];
