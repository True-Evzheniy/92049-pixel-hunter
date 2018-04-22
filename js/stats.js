import getElementFromTemplate from './utils/getElementFromTemlate.js';
import handleBackButton from './utils/handleBackButton.js';
import getHeader from './header.js';
import footer from './footer.js';
import getProgressBar from './progressBar.js';
import countPoints from './data/countPoints.js';

const getStats = (state) => {
  const gamePoints = countPoints(state.answers, state.lives);

  const getTable = (number, points) => {
    if (points.total === -1) {
      return `
      <table class="result__table">
        <tr>
          <td class="result__number">${number}.</td>
          <td>
            ${getProgressBar(state.answers)}
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
          <td colspan="2">${getProgressBar(state.answers)}</td>
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


  const template = `
  ${getHeader({backButton: true})}
<div class="result">
  <h1>${gamePoints.total === -1 ? `Поражение` : `Победа!`}</h1>
  ${getTable(1, gamePoints)}
</div>
${footer}`;
  const element = getElementFromTemplate(template);

  handleBackButton(element);

  return element;
};

export default getStats;
