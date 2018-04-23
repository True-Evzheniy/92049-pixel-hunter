import RulesView from './rulesView.js';
import renderScreen from '../../utils/renderScreen.js';
import {INITIAL_STATE} from '../../data/state.js';
import game from '../game/game.js';

export default () => {
  const rules = new RulesView();
  rules.onInput = () => {
    const {target} = event;

    if (target.value.length) {
      rules.button.disabled = false;
    } else {
      rules.button.disabled = true;
    }
  };

  rules.onSubmit = (event) => {
    event.preventDefault();

    renderScreen(game(INITIAL_STATE));
  };


  return rules.element;
};
