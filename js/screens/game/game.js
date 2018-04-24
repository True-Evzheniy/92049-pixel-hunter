import GameView from './gameView.js';
import renderScreen from '../../utils/renderScreen.js';
import getHeader from '../../header.js';
import {questions, QUESTION_TYPES, levels} from '../../data/data.js';
import * as questionSingle from '../../question-single.js';
import * as questionDouble from '../../question-double.js';
import * as questionTriple from '../../question-triple.js';
import getProgressBar from '../../progressBar.js';
import {canContinue, increaseLevel, decreaseLives, addAnswer} from '../../data/state.js';
import makeAnswer from '../../utils/makeAnswer.js';
import getStats from '../stats/stats.js';


const getGame = (state) => {
  const {lives, level, answers} = state;
  const game = new GameView();
  const levelName = levels[level];
  const question = questions[levelName];
  const {questionTemplate, handleActions} = getQuestionModule(levelName);
  const goToNextStep = (success) => {
    let newState = state;
    if (!success) {
      newState = decreaseLives(state);
    }
    newState = increaseLevel(newState);
    newState = addAnswer(makeAnswer(success, 15), newState);

    if (canContinue(newState)) {
      renderScreen(getGame(newState));
    } else {
      renderScreen(getStats(newState));
    }
  };

  game.header = getHeader({backButton: true, lives, timer: 0});
  game.questionTemplate = questionTemplate(question);
  game.progressBar = getProgressBar(answers);
  game.title = question.title;
  const onActions = () => handleActions(game.element, question, goToNextStep);
  game.onActions = onActions;

  return game.element;
};

function getQuestionModule(type) {
  const module = {
    [QUESTION_TYPES.SINGLE]: questionSingle,
    [QUESTION_TYPES.DOUBLE]: questionDouble,
    [QUESTION_TYPES.TRIPLE]: questionTriple
  };

  return module[type];
}

export default getGame;
