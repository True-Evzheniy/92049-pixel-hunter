import GreetingView from './greetingView.js';
import renderScreen from '../../utils/renderScreen.js';
import rules from '../rules/rules.js';

export default () => {
  const greeting = new GreetingView();

  greeting.onClick = () => {
    greeting.unbind();
    renderScreen(rules());
  };

  return greeting.element;
};
