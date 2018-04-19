import handleAnswers from './utils/handleAnswers.js';

export const questionTemplate = (question) => {
  const options = question.options.map((option, index) => (`
    <div class="game__option">
      <img src="${option.src}" alt="Option ${index + 1}" width="468" height="458">
      <label class="game__answer game__answer--photo">
        <input name="question${index + 1}" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer game__answer--paint">
        <input name="question${index + 1}" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>
    `)).join(``);

  return `
    <form class="game__content">
      ${options}
    </form>
  `;
};

export const handleActions = (node, question, goToNextStep) => {
  const form = node.querySelector(`form`);

  handleAnswers(form, `input[type="radio"]`, question, goToNextStep);
};
