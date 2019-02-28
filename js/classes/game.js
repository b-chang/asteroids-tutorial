import Canvas from '/js/utility/Canvas.js'
import MovingObject from '/js/classes/movingObject.js'
import Ship from '/js/classes/ship.js'
import key from '/js/utility/keymaster.js'

const MIN_ASTEROIDS = 10;

export default class Game {
  constructor() {
    this.asteroids = [];
    this.bullets = [];
    this.ship = new Ship({ x: 250, y: 250 })
    this.step = this.step.bind(this)
  }

  ensureMinAsteroids() {
    while(this.asteroids.length < MIN_ASTEROIDS) {
      this.asteroids.push(MovingObject.createRandomOutsideCanvas())
    };
  }

  move() {
    this.ship.move();
    this.asteroids.forEach(asteroid => {
      asteroid.move();
    })
    this.bullets.forEach(bullet => {
      bullet.move();
    })
  };

  bindShooting() {
    key('space', () => {
      this.bullets.push(this.ship.shoot())
    })
  }

  draw() {
    this.ship.draw();
    this.asteroids.forEach(asteroid => {
      asteroid.draw();
    })
    this.bullets.forEach(bullet => {
      bullet.draw();
    })
  };

  step() {
    Canvas.clear();
    this.ensureMinAsteroids();
    this.move();
    this.removeOutOfBounds();
    this.draw();
    this.bindShooting();

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
