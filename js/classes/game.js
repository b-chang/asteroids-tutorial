import Canvas from '/asteroids-tutorial/js/utility/Canvas.js'
import MovingObject from '/asteroids-tutorial/js/classes/movingObject.js'

const MIN_ASTEROIDS = 1;

export default class Game {
  constructor() {
    this.asteroids = [];
    this.step = this.step.bind(this)
  }

  ensureMinAsteroids() {
    while(this.asteroids.length < MIN_ASTEROIDS) {
      this.asteroids.push(MovingObject.createRandom())
    };
  }

  move() {
    this.asteroids.forEach(asteroid => {
      asteroid.move();
    })
  };

  draw() {
    this.asteroids.forEach(asteroid => {
      asteroid.draw();
    })
  };

  step() {
    Canvas.clear();
    this.ensureMinAsteroids();
    this.move();
    this.removeOutOfBounds();
    this.draw();

    requestAnimationFrame(this.step)
  };

  start() {
    this.step();
  };

  removeOutOfBounds() {
    this.asteroids = this.asteroids.filter(asteroid => {
      return !asteroid.isOutOfBounds();
    })
  }

};
