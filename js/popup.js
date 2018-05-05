import AbstractView from './AbstractView';

class Popup extends AbstractView {
  get template() {
    return `
      <div class="popup">
        <h3>Вы уверены что хотите прервать игру? Прогресс будет утерян</h3>
        <div class="popup__buttons-box">
          <button class="popup__btn popup__btn--yes">Да</button>
          <button class="popup__btn popup__btn--no">Нет</button>
        </div>
      </div>
    `;
  }

  bind() {
    const element = this._element;
    this.yesBtn = element.querySelector(`.popup__btn--yes`);
    this.noBtn = element.querySelector(`.popup__btn--no`);
    this.yesBtn.addEventListener(`click`, this.onYesBtnClick);
    this.noBtn.addEventListener(`click`, this.onNoBtnClick);
  }

  unbind() {
    this.yesBtn.removeEventListener(`click`, this.onYesBtnClick);
    this.noBtn.removeEventListener(`click`, this.onNoBtnClick);
  }

  onYesBtnClick() {}
  onNoBtnClick() {}
}

export default Popup;
