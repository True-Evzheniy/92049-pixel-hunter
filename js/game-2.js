import getElementFromTemplate from './utils/getElementFromTemlate.js';
import handleAnswers from './utils/handleAnswers.js';
import handleBackButton from './utils/handleBackButton.js';
import game3 from './game-3.js';
import renderScreen from './utils/renderScreen';
import getHeader from './header.js';
import footer from './footer.js';

const getGame2 = () => {
  const template = `
${getHeader({backButton: true, lives: 3, timer: 0})}
<div class="game">
<p class="game__task">Угадай, фото или рисунок?</p>
<form class="game__content  game__content--wide">
  <div class="game__option">
    <img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455">
    <label class="game__answer  game__answer--photo">
      <input name="question1" type="radio" value="photo">
      <span>Фото</span>
    </label>
    <label class="game__answer  game__answer--wide  game__answer--paint">
      <input name="question1" type="radio" value="paint">
      <span>Рисунок</span>
    </label>
  </div>
</form>
<div class="stats">
  <ul class="stats">
    <li class="stats__result stats__result--wrong"></li>
    <li class="stats__result stats__result--slow"></li>
    <li class="stats__result stats__result--fast"></li>
    <li class="stats__result stats__result--correct"></li>
    <li class="stats__result stats__result--wrong"></li>
    <li class="stats__result stats__result--unknown"></li>
    <li class="stats__result stats__result--slow"></li>
    <li class="stats__result stats__result--unknown"></li>
    <li class="stats__result stats__result--fast"></li>
    <li class="stats__result stats__result--unknown"></li>
  </ul>
</div>
</div>
${footer}`;
  const element = getElementFromTemplate(template);
  const form = element.querySelector(`form`);

  handleAnswers(form, `input[type="radio"]`, showNextScreen);
  handleBackButton(element);

  function showNextScreen() {
    renderScreen(game3());
  }

  return element;
};

export default getGame2;
