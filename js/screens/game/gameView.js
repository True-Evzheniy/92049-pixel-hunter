import AbstractView from '../../AbstractView.js';
import footer from '../../footer.js';

export default class GameView extends AbstractView {
  get template() {
    return `
    <div class="game">
      <p class="game__task">${this.title}</p>
      ${this.questionTemplate}
      ${this.progressBar}
    </div>
    ${footer}
  `;
  }

  bind() {
    this.onActions();
  }

  onActions() {}
}
