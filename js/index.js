import Canvas from '/js/utility/Canvas.js'
import MovingObject from '/js/classes/movingObject.js'

const { cos, sin } = Math

const MIN_ASTEROIDS = 10;
const asteroids = [];
let angle = 0;

while(asteroids.length < MIN_ASTEROIDS) {
  const x = cos(angle);
  const y = sin(angle);

  asteroids.push(new MovingObject({ x:100, y:100 }, { x, y }))
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
