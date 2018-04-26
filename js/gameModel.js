import {INITIAL_STATE, increaseLevel, decreaseLives, addAnswer} from "./data/state.js";
import {levels} from './data/data.js';

export default class GameModel {
  constructor(playerName) {
    this.playerName = playerName;
  }

  get state() {
    return this._state;
  }

  get level() {
    return this._state.level;
  }

  restart() {
    this._state = INITIAL_STATE;
  }

  increaseLevel() {
    this._state = increaseLevel(this._state);
  }

  decreaseLives() {
    this._state = decreaseLives(this._state);
  }

  addAnswer(answer) {
    this._state = addAnswer(answer, this._state);
  }

  canContinue() {
    return this._state.level <= levels.length - 1 && this._state.lives >= 0;
  }
}
