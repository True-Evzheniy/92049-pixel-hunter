import renderScreen from './utils/renderScreen.js';
import introScreen from './screens/intro/intro.js';
import Game from './screens/game/gamePresenter.js';
import GameModel from './gameModel.js';
import statsScreen from './screens/stats/stats.js';
import greetingScreen from './screens/greeting/greeting.js';
import {Rules as RulesScreen} from './screens/rules/rules.js';
import Loader from './loader.js';

let applicationData;

const saveData = (data) => {
  applicationData = data;
};

export default class Application {
  static start() {
    Loader.loadData()
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

  static showStats(state, playerName) {
    const stats = statsScreen(state, playerName);

    renderScreen(stats);
  }
}
