import getElementFromTemplate from './utils/getElementFromTemlate.js';
import handleAnswers from './utils/handleAnswers.js';
import renderScreen from './utils/renderScreen.js';
import handleBackButton from './utils/handleBackButton.js';
import game2 from './game-2.js';
import getHeader from './header.js';
import getProgressBar from './progressBar.js';
import footer from './footer.js';

const getGame1 = () => {
  const template = `
${getHeader({backButton: true, lives: 3, timer: 0})}
<div class="game">
<p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
<form class="game__content">
  <div class="game__option">
    <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
    <label class="game__answer game__answer--photo">
      <input name="question1" type="radio" value="photo">
      <span>Фото</span>
    </label>
    <label class="game__answer game__answer--paint">
      <input name="question1" type="radio" value="paint">
      <span>Рисунок</span>
    </label>
  </div>
  <div class="game__option">
    <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
    <label class="game__answer  game__answer--photo">
      <input name="question2" type="radio" value="photo">
      <span>Фото</span>
    </label>
    <label class="game__answer  game__answer--paint">
      <input name="question2" type="radio" value="paint">
      <span>Рисунок</span>
    </label>
  </div>
</form>
${getProgressBar()}
</div>
${footer}`;
  const element = getElementFromTemplate(template);
  const form = element.querySelector(`.game__content`);

  handleBackButton(element);
  handleAnswers(form, `input[type="radio"]`, showNextScreen);

  return element;
};

function showNextScreen() {
  renderScreen(game2());
}

export default getGame1;
