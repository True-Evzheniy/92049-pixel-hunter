import {LEVELS_QUANTITY} from './constants.js';

const getProgressBar = (answers = []) => {
  const progress = answers.map((answer) => (`<li class="stats__result stats__result--${answer.type}"></li>`));
  const unknownAnswers = new Array(LEVELS_QUANTITY - answers.length).fill(`<li class="stats__result stats__result--unknown"></li>`);

  return `
    <div class="stats">
      <ul class="stats">
        ${[...progress, ...unknownAnswers].join(``)}
      </ul>
    </div>
  `;
};

export default getProgressBar;
