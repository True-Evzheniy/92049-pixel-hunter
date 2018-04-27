import RulesView from './rulesView.js';
import Header from '../../header.js';
import Application from '../../application.js';

export class Rules {
  constructor() {
    this.header = new Header({backButton: true});
    this.header.onBackButtonClick = Application.showGreeting;

    this.rules = new RulesView();
    this.rules.onInput = () => {
      const {target} = event;

      if (target.value.length) {
        this.rules.button.disabled = false;
        this.value = target.value;
      } else {
        this.rules.button.disabled = true;
      }
    };
    this.rules.onSubmit = (event) => {
      event.preventDefault();

      Application.showGame(this.value);
    };

    this.root = document.createDocumentFragment();
    this.root.appendChild(this.header.element);
    this.root.appendChild(this.rules.element);
  }

  get element() {
    return this.root;
  }
}
