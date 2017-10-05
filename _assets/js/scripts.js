class Robot {
  constructor(message) {
    this.message = message;
  }

  talks() {
    console.log(this.message);
  }
}

const Bob = new Robot("hello humans!");
Bob.talks();
