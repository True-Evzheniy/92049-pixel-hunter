import {INITIAL_STATE, increaseLevel, decreaseLives, addAnswer} from "./data/state.js";
import {LEVELS_QUANTITY} from './constants.js';


export default class GameModel {
  constructor(playerName, data) {
    this.playerName = playerName;
    this._data = data;
  }

  get state() {
    return this._state;
  }

  get question() {
    return this._data[this._state.level];
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
    return this._state.level <= LEVELS_QUANTITY - 1 && this._state.lives >= 0;
  }
}
