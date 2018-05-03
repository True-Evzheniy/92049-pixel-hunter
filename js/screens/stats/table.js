import AbstractView from '../../AbstractView';

const getTemplate = (number, points, progressBar) => {
  if (points.total === -1) {
    return `
    <table class="result__table">
      <tr>
        <td class="result__number">${number}.</td>
        <td>
          ${progressBar}
        </td>
        <td class="result__total"></td>
        <td class="result__total  result__total--final">fail</td>
      </tr>
    </table>
    `;
  }
  return `
    <table class="result__table">
      <tr>
        <td class="result__number">${number}.</td>
        <td colspan="2">${progressBar}</td>
        <td class="result__points">×&nbsp;100</td>
        <td class="result__total">${points.success.points}</td>
      </tr>
      ${points.fast.quantity ? `
      <tr>
        <td></td>
        <td class="result__extra">Бонус за скорость:</td>
        <td class="result__extra">${points.fast.quantity}&nbsp;<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${points.fast.points}</td>
      </tr>` : ``}
      ${points.lives.quantity ? `
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">${points.lives.quantity}&nbsp;<span class="stats__result stats__result--alive"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${points.lives.points}</td>
      </tr>` : ``}
      ${points.slow.quantit ? `
      <tr>
        <td></td>
        <td class="result__extra">Штраф за медлительность:</td>
        <td class="result__extra">${points.slow.quantity}&nbsp;<span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${points.slow.points}</td>
      </tr>` : ``}
      <tr>
        <td colspan="5" class="result__total  result__total--final">${points.total}</td>
      </tr>
    </table>
  `;
};

class Table extends AbstractView {
  constructor(number, points, progressBar) {
    super();
    this.number = number;
    this.points = points;
    this.progressBar = progressBar;
  }

  get template() {
    return getTemplate(this.number, this.points, this.progressBar);
  }
}

export default Table;
