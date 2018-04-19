import getElementFromTemplate from './utils/getElementFromTemlate.js';
import renderScreen from './utils/renderScreen.js';
import handleBackButton from './utils/handleBackButton.js';
import game from './game.js';
import getHeader from './header.js';
import footer from './footer';
import {INITIAL_STATE} from './data/state.js';


const getRules = () => {
  const template = `
  ${getHeader({backButton: true})}
  <div class="rules">
  <h1 class="rules__title">Правила</h1>
  <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
    src="img/photo_icon.png" width="16" height="16"> или рисунок <img
    src="img/paint_icon.png" width="16" height="16" alt="">.<br>
    Фотографиями или рисунками могут быть оба изображения.<br>
    На каждую попытку отводится 30 секунд.<br>
    Ошибиться можно не более 3 раз.<br>
    <br>
    Готовы?
  </p>
  <form class="rules__form">
    <input class="rules__input" type="text" placeholder="Ваше Имя">
    <button class="rules__button  continue" type="submit" disabled>Go!</button>
  </form>
  </div>
  ${footer}`;
  const element = getElementFromTemplate(template);
  const form = element.querySelector(`.rules__form`);
  const input = element.querySelector(`.rules__input`);
  const button = element.querySelector(`.rules__button`);

  form.addEventListener(`submit`, handleSubmit);
  input.addEventListener(`input`, handleInput);
  handleBackButton(element);

  return element;

  function handleInput(event) {
    const {target} = event;

    if (target.value.length) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    form.removeEventListener(`submit`, handleSubmit);
    input.removeEventListener(`input`, handleInput);
    renderScreen(game(INITIAL_STATE));
  }
};

export default getRules;
