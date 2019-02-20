import Canvas from '/js/utility/Canvas.js'
import MovingObject from '/js/classes/movingObject.js'

const movingObject = new MovingObject({ x:100, y:100 }, { x:1, y:1 });

requestAnimationFrame(function step() {
  Canvas.clear();
  movingObject.move();
  movingObject.draw();
  requestAnimationFrame(step);
});
