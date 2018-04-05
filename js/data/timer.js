class Timer {
  constructor(time) {
    this.time = time;
  }

  tick() {
    if (!this.time) {
      return `finished`;
    }

    this.time--;

    return this.time || `finished`;
  }

}

export default Timer;
