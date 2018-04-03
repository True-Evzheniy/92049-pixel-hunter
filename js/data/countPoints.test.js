import {should} from 'chai';
import countPoints from './countPoints.js';

const normalCorrectAnswer = {success: true, spendedTime: 15};
const fastCorrectAnswer = {success: true, spendedTime: 5};
const slowCorrectAnswer = {success: true, spendedTime: 25};
const normalIncorrectAnswer = {success: false, spendedTime: 15};

should();

describe(`Function countPoints`, () => {

  describe(`got 3 lives`, () => {
    it(`should return 1150 points when all answers have normal speed`, () => {
      const answers = new Array(10).fill(normalCorrectAnswer);

      countPoints(answers, 3).should.be.equal(1150);
    });

    it(`should return 650 points when all answers have slow speed`, () => {
      const answers = new Array(10).fill(slowCorrectAnswer);

      countPoints(answers, 3).should.be.equal(650);
    });

    it(`should return 1650 points when all answers have fast speed`, () => {
      const answers = new Array(10).fill(fastCorrectAnswer);

      countPoints(answers, 3).should.be.equal(1650);
    });
  });

  it(`should return -1 when a count of correct answers less than 10`, () => {
    const answers = new Array(9).fill(normalCorrectAnswer);
    answers.push(normalIncorrectAnswer);

    countPoints(answers, 1).should.be.equal(-1);
  });

  it(`it should return 1000 when a when all answers have normal speed and user dos't have lives`, () => {
    const answers = new Array(10).fill(normalCorrectAnswer);

    countPoints(answers, 0).should.be.equal(1000);
  });
});
