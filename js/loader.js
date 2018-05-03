import {QUESTION_TYPES} from './data/data.js';

const SERVER_URL = `https://es.dump.academy/pixel-hunter`;
const APP_ID = `11091987`;

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  }
  throw new Error(`${response.status}: ${response.statusText}`);
};

const toJSON = (response) => response.json();

const convertAnswerToOption = (answer) => {
  return {
    src: answer.image.url,
    correctAnswer: answer.type
  };
};

const adaptServerData = (serverData) => {
  const data = serverData.map((it) => {
    let question;
    switch (it.type) {
      case QUESTION_TYPES.SINGLE:
        question = {
          type: it.type,
          options: [{src: it.answers[0].image.url, correctAnswer: it.answers[0].type}],
          question: it.question
        };
        break;
      case QUESTION_TYPES.DOUBLE:
        question = {
          type: it.type,
          question: it.question,
          options: it.answers.map(convertAnswerToOption)
        };
        break;
      case QUESTION_TYPES.TRIPLE:
        question = {
          type: it.type,
          question: it.question,
          options: it.answers.map(convertAnswerToOption)
        };
        break;
    }
    return question;
  });

  return data;
};

class Loader {
  static loadData() {
    return fetch(`${SERVER_URL}/questions`)
        .then(checkStatus)
        .then((response) => response.json())
        .then(adaptServerData);
  }

  static saveResult(data, playerName) {
    const options = {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": `application/json`
      },
      method: `POST`
    };

    return fetch(`${SERVER_URL}/stats/${APP_ID}-${playerName}`, options)
        .then(checkStatus);
  }

  static loadResulsts(playerName) {
    return fetch(`${SERVER_URL}/stats/${APP_ID}-${playerName}`)
        .then(checkStatus)
        .then(toJSON);
  }
}

export default Loader;
