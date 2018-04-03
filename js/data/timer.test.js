import {should} from 'chai';
import Timer from './timer.js';
should();

const time = 2;
const timer = new Timer(time);

describe(`Timer`, () => {
  it(`should return object`, () => {
    timer.should.be.a(`object`);
  });

  it(`should return 1 when tick was called one time`, () => {
    timer.tick().should.be.equal(1);
  });

  it(`should return 'finished' after next tick`, () => {
    timer.tick().should.be.equal(`finished`);
  });

  it(`should return 'finished' when timer was finished`, () => {
    timer.tick().should.be.equal(`finished`);
  });
});
