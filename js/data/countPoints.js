import {POINTS, ANSWER_TYPES} from '../constants.js';


const countPoints = (answers, lives) => {

  if (lives < 0) {
    return {total: -1};
  }

  const speedPoints = answers.reduce((points, answer) => points + POINTS[answer.type], 0);

  const livesPoints = lives * 50;
  const fastQuantity = answers.filter((answer) => answer.type === ANSWER_TYPES.FAST).length;
  const fastPoints = fastQuantity * 50;
  const slowQuantity = answers.filter((answer) => answer.type === ANSWER_TYPES.SLOW).length;
  const slowPoints = slowQuantity * -50;
  const successQuantyty = answers.filter((answer) => {
    return [ANSWER_TYPES.SLOW, ANSWER_TYPES.FAST, ANSWER_TYPES.CORRECT].includes(answer.type);
  }).length;
  const successPoints = successQuantyty * 100;

  return {
    total: speedPoints + livesPoints,
    lives: {
      points: livesPoints,
      quantity: lives
    },
    fast: {
      points: fastPoints,
      quantity: fastQuantity
    },
    slow: {
      points: slowPoints,
      quantity: slowQuantity
    },
    success: {
      points: successPoints
    }
  };
};

export default countPoints;
