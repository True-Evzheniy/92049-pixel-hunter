import AbstractView from '../../AbstractView.js';


export default class IntroView extends AbstractView {
  get template() {
    return `
      <div id="main" class="central__content">
        <div id="intro" class="intro">
          <h1 class="intro__asterisk">*</h1>
          <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
        </div>
      </div>
      `;
  }

  bind() {
    const element = this._element;

    this.asterisk = element.querySelector(`.intro__asterisk`);
    this.asterisk.addEventListener(`click`, this.onClick);
  }

  unbind() {
    this.asterisk.removeEventListener(`click`, this.onClick);
  }

  onClick() {}
}
