import StatsView from './statsView.js';
import Header from '../../header.js';
import Table from './table.js';
import getProgressBar from '../../progressBar.js';
import countPoints from '../../data/countPoints.js';
import Loader from '../../loader.js';

export default function (state, playerName) {
  const stats = new StatsView();
  const showResults = (data) => {
    const results = data.reduceRight((fragment, it, index)=> {
      const {lives, answers} = it;
      const points = countPoints(answers, lives);

      fragment.appendChild((new Table(data.length - index, points, getProgressBar(answers))).element);

      return fragment;
    }, document.createDocumentFragment());
    stats.showResults(results);
  };

  stats.header = new Header({backButton: true}).template;
  const gamePoints = countPoints(state.answers, state.lives);
  stats.gamePoints = gamePoints;

  Loader.saveResult(state, playerName)
      .then(() => Loader.loadResulsts(playerName))
      .then((data) => showResults(data));

  return stats.element;
}
