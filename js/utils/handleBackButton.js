import renderScreen from './renderScreen.js';
import greeting from '../screens/greeting/greeting.js';


const handleBackButton = (element) => {
  const button = element.querySelector(`.header__back`);

  button.addEventListener(`click`, handleClick);

  function handleClick() {
    button.removeEventListener(`click`, handleClick);

    renderScreen(greeting());
  }
};

export default handleBackButton;
