const handleAnswers = (element, inputSelector, question, callback) => {
  const inputs = [...element.querySelectorAll(inputSelector)];
  const UnansweredQuestions = new Set();
  const answers = new Map();

  inputs.forEach((input) => {
    input.addEventListener(`change`, handleChangeInput);
    UnansweredQuestions.add(input.name);
  });

  function handleChangeInput(event) {
    const {target} = event;

    UnansweredQuestions.delete(target.name);
    answers.set(Number(target.name.replace(/\D+/g, ``)) - 1, target.value);

    if (!UnansweredQuestions.size) {
      let correct;
      answers.forEach((item, key) => {
        correct = item === question.options[key].correctAnswer;
      });

      inputs.forEach((input) => {
        input.removeEventListener(`change`, handleChangeInput);
      });
      callback(correct);
    }
  }
};

export default handleAnswers;
