import getElementFromTemplate from './utils/getElementFromTemlate.js';
import renderScreen from './utils/renderScreen.js';
import getStats from './stats.js';
import getHeader from './header.js';
import getProgressBar from './progressBar.js';
import footer from './footer.js';
import * as questionSingle from './question-single.js';
import * as questionDouble from './question-double.js';
import * as questionTriple from './question-triple.js';
import {questions, QUESTION_TYPES, levels} from './data/data.js';
import {canContinue, increaseLevel, decreaseLives, addAnswer} from './data/state.js';
import handleBackButton from './utils/handleBackButton.js';
import makeAnswer from './utils/makeAnswer.js';


const getGame = (state) => {

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

  const {level, lives} = state;
  const levelName = levels[level];
  const question = questions[levelName];
  const {questionTemplate, handleActions} = getQuestionModule(levelName);
  const template = `
    ${getHeader({backButton: true, lives, timer: 0})}
    <div class="game">
      <p class="game__task">${question.title}</p>
      ${questionTemplate(question)}
      ${getProgressBar(state.answers)}
    </div>
    ${footer}
  `;
  const element = getElementFromTemplate(template);
  handleBackButton(element);
  handleActions(element, question, goToNextStep);

  return element;
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
