import {ANSWER_TYPES} from '../constants.js';

const makeAnswer = (success, spendedTime) => {
  const type = getType(success, spendedTime);

  return {success, type};
};

function getType(success, spendedTime) {
  if (!success) {
    return ANSWER_TYPES.WRONG;
  }
  if (spendedTime <= 10) {
    return ANSWER_TYPES.FAST;
  }
  if (spendedTime <= 20) {
    return ANSWER_TYPES.CORRECT;
  }

  return ANSWER_TYPES.SLOW;
}

export default makeAnswer;
