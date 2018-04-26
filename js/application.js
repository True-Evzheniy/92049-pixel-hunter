import renderScreen from './utils/renderScreen.js';
import introScreen from './screens/intro/intro.js';
import Game from './screens/game/gamePresenter.js';
import GameModel from './gameModel.js';
import statsScreen from './screens/stats/stats.js';
import greetingScreen from './screens/greeting/greeting.js';
import {Rules as RulesScreen} from './screens/rules/rules.js';


export default class Application {
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
    const model = new GameModel(playerName);
    const game = new Game(model);

    renderScreen(game.element);
  }

  static showStats() {
    const stats = statsScreen();

    renderScreen(stats);
  }
}
