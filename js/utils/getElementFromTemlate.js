const getElemetFromTemplate = (templateString) => {
  const template = document.createElement(`template`);

  template.innerHTML = templateString;

  return template.content;
};

export default getElemetFromTemplate;
