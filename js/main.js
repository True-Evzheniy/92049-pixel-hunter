(() => {
  const KEY_CODES = {
    ARROW_RIGHT: 39,
    ARROW_LEFT: 37,
    ALT: 18
  };
  const templates = [...document.querySelectorAll(`template`)];
  const mainNode = document.querySelector(`main.central`);
  let altPressed = false;
  let currentScreen = 0;

  const renderScreen = (screenNumber) => {
    const clonedNode = document.importNode(templates[screenNumber].content, true);

    mainNode.innerHTML = ``;
    mainNode.appendChild(clonedNode);
  };

  document.querySelector(`.intro__asterisk`).addEventListener(`click`, handleStart);

  function handleStart() {
    document.addEventListener(`click`, handleArrowClick);
    document.addEventListener(`keydown`, handleShortcut);
    document.addEventListener(`keyup`, handleAltKeyup);

    renderScreen(0);
  }


  function handleArrowClick(event) {
    let {target} = event;

    while (target !== document) {
      if (target.className.includes(`greeting__continue`)) {
        showNextScreen();
        return;
      }

      if (target.className.includes(`back`)) {
        showPreviosScreen();
        return;
      }
      target = target.parentNode;
    }
  }

  function showNextScreen() {
    if (currentScreen < templates.length - 1) {
      currentScreen++;
      renderScreen(currentScreen);
    }
  }

  function showPreviosScreen() {
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
      showPreviosScreen();
    }

    if (keyCode === KEY_CODES.ARROW_RIGHT && altPressed) {
      showNextScreen();
    }
  }

  function handleAltKeyup(event) {
    if (event.keyCode === KEY_CODES.ALT) {
      altPressed = false;
    }
  }
})();

