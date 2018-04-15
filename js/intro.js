import getElementFromTemplate from './utils/getElementFromTemlate.js';
import renderScreen from './utils/renderScreen.js';
import greeting from './greeting.js';
import footer from './footer.js';

const getIntro = () => {
  const template = `<div id="main" class="central__content">
  <div id="intro" class="intro">
    <h1 class="intro__asterisk">*</h1>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </div>
  </div>
  ${footer}`;
  const element = getElementFromTemplate(template);
  const asterisk = element.querySelector(`.intro__asterisk`);

  asterisk.addEventListener(`click`, showNextScreen);

  return element;
};

function showNextScreen() {
  document.removeEventListener(`click`, showNextScreen);
  renderScreen(greeting());
}

export default getIntro;
