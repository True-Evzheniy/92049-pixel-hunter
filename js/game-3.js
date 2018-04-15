import getElementFromTemplate from './utils/getElementFromTemlate.js';
import renderScreen from './utils/renderScreen.js';
import handleBackButton from './utils/handleBackButton.js';
import stats from './stats.js';
import getHeader from './header.js';
import footer from './footer.js';

const getGame3 = () => {
  const template = `
  ${getHeader({backButton: true, lives: 3, timer: 0})}
  <div class="game">
  <p class="game__task">Найдите рисунок среди изображений</p>
  <form class="game__content  game__content--triple">
    <div class="game__option">
      <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
    </div>
    <div class="game__option  game__option--selected">
      <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
    </div>
    <div class="game__option">
      <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
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
  const options = [...element.querySelectorAll(`.game__option`)];

  options.forEach((option) => {
    option.addEventListener(`click`, showNextScreen);
  });
  handleBackButton(element);

  function showNextScreen() {
    options.forEach((option) => {
      option.removeEventListener(`click`, showNextScreen);
    });
    renderScreen(stats());
  }

  return element;
};

export default getGame3;
