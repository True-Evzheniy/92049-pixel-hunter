import {LEVELS_QUANTITY} from '../constants';

export const INITIAL_STATE = Object.freeze({
  level: 0,
  lives: 3,
  timer: 0,
  answers: []
});

export const increaseLevel = (state) => Object.assign({}, state, {level: state.level + 1});

export const decreaseLives = (state) => Object.assign({}, state, {lives: state.lives - 1});

export const canContinue = (state) => state.level <= LEVELS_QUANTITY - 1 && state.lives >= 0;

export const addAnswer = (answer, state) => Object.assign({}, state, {answers: [...state.answers, answer]});
