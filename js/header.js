import {MAX_LIVES} from './constants.js';

const header = ({backButton, timer, lives}) => {
  const backButtonTemplate = backButton ? `
    <div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>` : ``;

  const timerTemplate = timer >= 0 ? `<h1 class="game__timer">${timer}</h1>` : ``;
  const getLivesTemplate = () => {
    if (lives >= 0) {
      const emptyHeart = `<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`;
      const fullHeart = `<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`;

      return `
        <div class="game__lives">
          ${new Array(MAX_LIVES - lives).fill(emptyHeart).join(``)}
          ${new Array(lives).fill(fullHeart).join(``)}
        </div>
      `;
    }

    return ``;
  };


  return `
    <header class="header">
      ${backButtonTemplate}
      ${timerTemplate}
      ${getLivesTemplate()}
    </header>
  `;
};

export default header;
