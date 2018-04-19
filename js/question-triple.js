export const questionTemplate = (question) => {
  const options = question.options.map((option)=> (`
   <div class="game__option">
      <img src="${option.src}" alt="Option 1" width="304" height="455">
    </div>
  `)).join(``);

  return `
    <form class="game__content  game__content--triple">
      ${options}
    </form>
  `;
};

export const handleActions = (node, question, goToNextStep) => {
  const form = node.querySelector(`form`);

  handleAnswers(form);

  function handleAnswers(nodeElem) {
    const options = [...nodeElem.querySelectorAll(`.game__option`)];

    options.forEach((option) => {
      option.addEventListener(`click`, showNextScreen);
    });

    function showNextScreen({target}) {
      let correct = false;
      options.forEach((option, index) => {
        option.removeEventListener(`click`, showNextScreen);
        if (target === option) {
          correct = index === question.correctAnswer;
        }
      });
      goToNextStep(correct);
    }
  }
};
