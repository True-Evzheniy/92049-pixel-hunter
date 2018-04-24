import StatsView from './statsView.js';
import getHeader from '../../header.js';
import getTable from './table.js';
import getProgressBar from '../../progressBar.js';
import countPoints from '../../data/countPoints.js';


export default function (state) {
  const {answers, lives} = state;
  const stats = new StatsView();
  stats.header = getHeader({backButton: true});
  const gamePoints = countPoints(answers, lives);
  stats.gamePoints = gamePoints;
  stats.table = getTable(1, gamePoints, getProgressBar(answers));

  return stats.element;
}
