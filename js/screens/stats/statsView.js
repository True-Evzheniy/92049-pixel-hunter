import AbstractView from '../../AbstractView.js';
import footer from '../../footer.js';
import handleBackButton from '../../utils/handleBackButton.js';

export default class StatsView extends AbstractView {
  get template() {
    return `
      ${this.header}
      <div class="result">
        <h1>${this.gamePoints.total === -1 ? `Поражение` : `Победа!`}</h1>
        ${this.table}
      </div>
      ${footer}`;
  }

  bind() {
    handleBackButton(this._element);
  }
}
