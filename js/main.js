(() => {
  const KEY_CODES = {
    ARROW_RIGHT: 39,
    ARROW_LEFT: 37,
    ALT: 18
  };
  const templates = [...document.querySelectorAll(`template`)];
  const mainNode = document.querySelector(`main.central`);
  const body = document.querySelector(`body`);
  let altPressed = false;
  let currentScreen = 0;

  const renderScreen = (screenNumber) => {
    const clonedNode = document.importNode(templates[screenNumber].content, true);

    mainNode.innerHTML = ``;
    mainNode.appendChild(clonedNode);
  };

  renderScreen(currentScreen);

  body.addEventListener(`click`, handleArrowClick);

  document.addEventListener(`keydown`, handleShortcut);

  function handleArrowClick(event) {
    let {target} = event;

    while (target !== body) {
      if (target.className.includes(`greeting__continue`)) {
        handleNextScreen();
        return;
      }

      if (target.className.includes(`back`)) {
        handlePreviosScreen();
        return;
      }
      target = target.parentNode;
    }
  }

  function handleNextScreen() {
    if (currentScreen < templates.length - 1) {
      currentScreen++;
      renderScreen(currentScreen);
    }
  }

  function handlePreviosScreen() {
    if (currentScreen > 0) {
      currentScreen--;
      renderScreen(currentScreen);
    }
  }

  function handleShortcut() {
    const {keyCode} = event;

    if (keyCode === KEY_CODES.ALT) {
      altPressed = true;
    }

    if (keyCode === KEY_CODES.ARROW_LEFT && altPressed) {
      handlePreviosScreen();
    }

    if (keyCode === KEY_CODES.ARROW_RIGHT && altPressed) {
      handleNextScreen();
    }
  }
})();

