import GreetingView from './greetingView.js';
import Application from '../../application.js';

export default () => {
  const greeting = new GreetingView();

  greeting.onClick = () => {
    greeting.unbind();
    Application.showRules();
  };

  return greeting.element;
};
