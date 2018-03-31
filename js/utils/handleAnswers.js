const handleAnswers = (element, inputSelector, callback) => {
  const inputs = [...element.querySelectorAll(inputSelector)];
  const UnansweredQuestions = new Set();

  inputs.forEach((input) => {
    input.addEventListener(`change`, handleChangeInput);
    UnansweredQuestions.add(input.name);
  });

  function handleChangeInput(event) {
    const {target} = event;

    UnansweredQuestions.delete(target.name);

    if (!UnansweredQuestions.size) {
      inputs.forEach((input) => {
        input.removeEventListener(`change`, handleChangeInput);
        UnansweredQuestions.add(input.name);
      });
      callback();
    }
  }
};

export default handleAnswers;
