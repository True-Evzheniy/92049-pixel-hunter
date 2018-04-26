export default class AbstractView {
  static createElement(templateString) {
    const template = document.createElement(`div`);

    template.innerHTML = templateString;

    return template;
  }

  get template() {}

  render() {
    return AbstractView.createElement(this.template);
  }

  bind() {}

  get element() {
    if (!this._element) {
      this._element = this.render();
      this.bind();
    }
    return this._element;
  }
}
