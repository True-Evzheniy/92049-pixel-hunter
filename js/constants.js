export const MAX_LIVES = 3;

export const LEVEL_TIME = 30;

export const ANSWERS = {
  PHOTO: `photo`,
  PAINT: `paint`
};

export const ANSWER_TYPES = {
  WRONG: `wrong`,
  SLOW: `slow`,
  FAST: `fast`,
  CORRECT: `correct`,
  UNKNOWN: `unknown`
};

export const POINTS = {
  [ANSWER_TYPES.WRONG]: 0,
  [ANSWER_TYPES.SLOW]: 50,
  [ANSWER_TYPES.FAST]: 150,
  [ANSWER_TYPES.CORRECT]: 100
};
