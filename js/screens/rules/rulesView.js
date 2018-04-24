import AbstractView from '../../AbstractView.js';
import footer from '../../footer.js';
import {levels} from '../../data/data.js';
import {LEVEL_TIME, MAX_LIVES} from '../../constants.js';
import handleBackButton from '../../utils/handleBackButton.js';
import getHeader from '../../header.js';

export default class RulesView extends AbstractView {
  constructor() {
    super();
    this.getHeader = getHeader;
  }

  get template() {
    return `
    ${this.getHeader({backButton: true})}
    <div class="rules">
    <h1 class="rules__title">Правила</h1>
    <p class="rules__description">Угадай ${levels.length} раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится ${LEVEL_TIME} секунд.<br>
      Ошибиться можно не более ${MAX_LIVES} раз.<br>
      <br>
      Готовы?
    </p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
    </div>
    ${footer}`;
  }

  bind() {
    const element = this._element;
    this.form = element.querySelector(`.rules__form`);
    this.input = element.querySelector(`.rules__input`);
    this.button = element.querySelector(`.rules__button`);

    this.form.addEventListener(`submit`, this.onSubmit);
    this.input.addEventListener(`input`, this.onInput);
    handleBackButton(element);
  }

  unbind() {
    this.form.removeEventListener(`submit`, this.onSubmit);
    this.input.removeEventListener(`input`, this.onInput);
  }

  onSubmit() {}

  onInput() {}
}
