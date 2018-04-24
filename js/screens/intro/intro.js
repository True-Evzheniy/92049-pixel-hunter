import IntroView from './introView.js';
import renderScreen from '../../utils/renderScreen.js';
import greeting from '../greeting/greeting.js';


export default () => {
  const intro = new IntroView();
  intro.onClick = () => {
    intro.unbind();
    renderScreen(greeting());
  };

  return intro.element;
};
