import GameView from "./gameView.js";
import Header from "../../header.js";
import Application from "../../application.js";
import getProgressBar from '../../progressBar.js';

import {QUESTION_TYPES} from "../../data/data.js";
import * as questionSingle from "../../question-single.js";
import * as questionDouble from "../../question-double.js";
import * as questionTriple from "../../question-triple.js";
import makeAnswer from "../../utils/makeAnswer.js";
import Timer from '../../data/timer.js';
import {LEVEL_TIME} from '../../constants.js';

export default class GamePresenter {
  constructor(model) {
    this.model = model;
    this.timer = new Timer(LEVEL_TIME);
    model.restart();
    this.root = document.createElement(`div`);
    this.updateHeader();
    this.updateContent();
    this.root.appendChild(this.header.element);
    this.root.appendChild(this.content.element);
  }

  start() {
    this.reset();
    this.intervalId = setInterval(() => {
      const time = this.timer.tick();
      this.updateHeader();
      if (time === `finished`) {
        this.reset();
        this.answer(false);
      }
    }, 1000);
  }

  reset() {
    this.timer.reset();
    clearInterval(this.intervalId);
  }

  get element() {
    return this.root;
  }

  getQuestionModule({type}) {
    const module = {
      [QUESTION_TYPES.SINGLE]: questionSingle,
      [QUESTION_TYPES.DOUBLE]: questionDouble,
      [QUESTION_TYPES.TRIPLE]: questionTriple
    };

    return module[type];
  }

  updateHeader() {
    const {lives} = this.model.state;
    const timer = this.timer.getTime();
    const header = new Header({backButton: true, lives, timer});
    header.onBackButtonClick = () => {
      this.reset();
      Application.showGreeting();
    };
    if (this.header) {
      this.root.replaceChild(header.element, this.header.element);
    }
    this.header = header;
  }

  updateContent() {
    this.start();
    const {question} = this.model;
    const {questionTemplate, handleActions} = this.getQuestionModule(question);
    const content = new GameView();
    content.title = question.question;
    content.questionTemplate = questionTemplate(question);
    content.progressBar = getProgressBar(this.model.state.answers);
    content.onActions = () =>
      handleActions(content.element, question, this.answer.bind(this));
    if (this.content) {
      this.root.replaceChild(content.element, this.content.element);
    }
    this.content = content;
  }

  answer(success) {
    this.model.increaseLevel();
    const spendedTime = this.timer.getTime();
    const answer = makeAnswer(success, spendedTime);
    this.model.addAnswer(answer);

    if (!success) {
      this.model.decreaseLives();
    }

    if (!this.model.canContinue()) {
      this.reset();
      Application.showStats(this.model.state);
      return;
    } else {
      this.updateContent();
      this.updateHeader();
    }
  }
}
