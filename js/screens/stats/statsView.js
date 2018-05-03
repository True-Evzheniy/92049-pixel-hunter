import AbstractView from '../../AbstractView.js';
import footer from '../../footer.js';
import handleBackButton from '../../utils/handleBackButton.js';

export default class StatsView extends AbstractView {
  get template() {
    return `
      ${this.header}
      <div class="result">
        <h1>${this.gamePoints.total === -1 ? `Поражение` : `Победа!`}</h1>
      </div>
      ${footer}`;
  }

  bind() {
    handleBackButton(this._element);
    this.result = this._element.querySelector(`.result`);
  }

  showResults(results) {
    this.result.appendChild(results);
  }
}
