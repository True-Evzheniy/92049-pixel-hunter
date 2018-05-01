import renderScreen from './utils/renderScreen.js';
import introScreen from './screens/intro/intro.js';
import Game from './screens/game/gamePresenter.js';
import GameModel from './gameModel.js';
import statsScreen from './screens/stats/stats.js';
import greetingScreen from './screens/greeting/greeting.js';
import {Rules as RulesScreen} from './screens/rules/rules.js';
import {QUESTION_TYPES} from './data/data.js';

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  }
  throw new Error(`${response.status}: ${response.statusText}`);
};


let applicationData;
const convertAnswerToOption = (answer) => {
  return {
    src: answer.image.url,
    correctAnswer: answer.type
  };
};
const adaptServerData = (serverData) => {
  const data = serverData.map((it) => {
    let question;
    switch (it.type) {
      case QUESTION_TYPES.SINGLE:
        question = {
          type: it.type,
          options: [{src: it.answers[0].image.url, correctAnswer: it.answers[0].type}],
          question: it.question
        };
        break;
      case QUESTION_TYPES.DOUBLE:
        question = {
          type: it.type,
          question: it.question,
          options: it.answers.map(convertAnswerToOption)
        };
        break;
      case QUESTION_TYPES.TRIPLE:
        question = {
          type: it.type,
          question: it.question,
          options: it.answers.map(convertAnswerToOption)
        };
        break;
    }
    return question;
  });

  return data;
};
const saveData = (data) => {
  applicationData = data;
};

export default class Application {
  static start() {
    fetch(`https://es.dump.academy/pixel-hunter/questions`)
        .then(checkStatus)
        .then((response) => response.json())
        .then(adaptServerData)
        .then(saveData)
        .then(Application.showIntro);
  }

  static showIntro() {
    const intro = introScreen();
    renderScreen(intro);
  }

  static showGreeting() {
    const greeting = greetingScreen();
    renderScreen(greeting);
  }

  static showRules() {
    const rules = new RulesScreen();
    renderScreen(rules.element);
  }

  static showGame(playerName) {
    const model = new GameModel(playerName, applicationData);
    const game = new Game(model);

    renderScreen(game.element);
  }

  static showStats(state) {
    const stats = statsScreen(state);

    renderScreen(stats);
  }
}
