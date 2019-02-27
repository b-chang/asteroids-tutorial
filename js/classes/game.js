import Canvas from '/js/utility/Canvas.js'
import MovingObject from '/js/classes/movingObject.js'

const MIN_ASTEROIDS = 5;

export default class Game {
  constructor() {
    this.asteroids = [];
    this.step = this.step.bind(this)
  }

  ensureMinAsteroids() {
    while(this.asteroids.length < MIN_ASTEROIDS) {
      this.asteroids.push(MovingObject.createRandomOutsideCanvas())
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
