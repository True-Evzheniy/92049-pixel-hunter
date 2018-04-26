import IntroView from './introView.js';
import Application from '../../application.js';


export default () => {
  const intro = new IntroView();
  intro.onClick = () => {
    intro.unbind();
    Application.showGreeting();
  };

  return intro.element;
};
