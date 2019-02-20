import Canvas from '/js/utility/Canvas.js'

const { random, PI, cos, sin } = Math;
const MAX_SPEED = 2;
const defaultColor = 'white';
const defaultRadius = 20;

export default class MovingObject {
  constructor(position, velocity, radius=defaultRadius, color=defaultColor) {
    this.position = position;
    this.velocity = velocity;
    this.radius = radius;
    this.color = color;
  }

  move() {
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
  }

  draw() {
    Canvas.drawCircle({
      x: this.position.x,
      y: this.position.y,
      radius: this.radius
    })
  }

  static createRandom() {
    const speed = MAX_SPEED * random();
    const angle = 2*PI * random();
    return new MovingObject(
      { x: 500*random(), y:500*random() },
      { x: speed*cos(angle), y: speed*sin(angle) }
    );
  }
}
