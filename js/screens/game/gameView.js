import AbstractView from '../../AbstractView.js';
import footer from '../../footer.js';
import handleBackButton from '../../utils/handleBackButton.js';


export default class GameView extends AbstractView {
  get template() {
    return `
    ${this.header}
    <div class="game">
      <p class="game__task">${this.title}</p>
      ${this.questionTemplate}
      ${this.progressBar}
    </div>
    ${footer}
  `;
  }

  bind() {
    handleBackButton(this._element);
    this.onActions();
  }

  onActions() {}
}
