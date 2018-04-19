import handleAnswers from './utils/handleAnswers.js';

export const questionTemplate = (question) => {
  const option = `
  <div class="game__option">
    <img src="${question.options[0].src}" alt="Option 1" width="705" height="455">
    <label class="game__answer  game__answer--photo">
      <input name="question1" type="radio" value="photo">
      <span>Фото</span>
    </label>
    <label class="game__answer  game__answer--wide  game__answer--paint">
      <input name="question1" type="radio" value="paint">
      <span>Рисунок</span>
    </label>
  </div>`;

  return `
    <form class="game__content  game__content--wide">
      ${option}
    </form>
  `;
};

export const handleActions = (node, question, goToNextScreen) => {
  const form = node.querySelector(`form`);

  handleAnswers(form, `input[type="radio"]`, question, goToNextScreen);
};
