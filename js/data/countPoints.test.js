import {should} from 'chai';
import countPoints from './countPoints.js';
import {ANSWER_TYPES} from '../constants.js';

const normalCorrectAnswer = {success: true, type: ANSWER_TYPES.CORRECT};
const fastCorrectAnswer = {success: true, type: ANSWER_TYPES.FAST};
const slowCorrectAnswer = {success: true, type: ANSWER_TYPES.SLOW};
const normalIncorrectAnswer = {success: false, type: ANSWER_TYPES.CORRECT};

should();

describe(`Function countPoints`, () => {

  describe(`got 3 lives`, () => {
    it(`should return 1150 points when all answers have normal speed`, () => {
      const answers = new Array(10).fill(normalCorrectAnswer);

      countPoints(answers, 3).total.should.be.equal(1150);
    });

    it(`should return 650 points when all answers have slow speed`, () => {
      const answers = new Array(10).fill(slowCorrectAnswer);

      countPoints(answers, 3).total.should.be.equal(650);
    });

    it(`should return 1650 points when all answers have fast speed`, () => {
      const answers = new Array(10).fill(fastCorrectAnswer);

      countPoints(answers, 3).total.should.be.equal(1650);
    });
  });

  it(`should return -1 when a count of correct answers less than 10`, () => {
    const answers = new Array(9).fill(normalCorrectAnswer);
    answers.push(normalIncorrectAnswer);

    countPoints(answers, -1).total.should.be.equal(-1);
  });

  it(`it should return 1000 when a when all answers have normal speed and user dos't have lives`, () => {
    const answers = new Array(10).fill(normalCorrectAnswer);

    countPoints(answers, 0).total.should.be.equal(1000);
  });
});
