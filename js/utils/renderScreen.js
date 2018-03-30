const containerToRender = document.querySelector(`.central`);

export default (node) => {
  while (containerToRender.firstChild) {
    containerToRender.removeChild(containerToRender.firstChild);
  }

  containerToRender.appendChild(node);
};
