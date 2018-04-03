const countPoints = (answers, lives) => {
  const success = answers.every((answer) => answer.success && answer.spendedTime <= 30);

  if (!success) {
    return -1;
  }

  const speedPoints = answers.reduce((points, answer) => {
    if (answer.spendedTime <= 10) {
      return points + 150;
    }
    if (answer.spendedTime <= 20) {
      return points + 100;
    }

    return points + 50;
  }, 0);

  const livesPoints = lives * 50;

  return speedPoints + livesPoints;
};

export default countPoints;
