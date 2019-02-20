import Canvas from '/js/utility/Canvas.js'
import MovingObject from '/js/classes/movingObject.js'

const { cos, sin } = Math

const MIN_ASTEROIDS = 200;
const asteroids = [];
let angle = 0;

while(asteroids.length < MIN_ASTEROIDS) {
  const x = cos(angle);
  const y = sin(angle);

  asteroids.push(MovingObject.createRandom())
  angle += .1;
};


requestAnimationFrame(function step() {
  Canvas.clear();

  asteroids.forEach(asteroid => {
    asteroid.move();
    asteroid.draw();
  })

  requestAnimationFrame(step);
});
