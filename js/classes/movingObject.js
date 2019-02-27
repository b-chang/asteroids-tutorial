import Canvas from '/js/utility/Canvas.js'
import BoundingBox from '/js/utility/boundingBox.js'
import sample from '/node_modules/lodash-es/sample.js'

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

  isOutOfBounds() {
    const canvasBB = Canvas.getBoundingBox();
    return !this.getBoundingBox().intersects(canvasBB);
  }

  getBoundingBox() {
    return new BoundingBox(
      { x:this.position.x-this.radius, y:this.position.y-this.radius },
      { x:this.position.x+this.radius, y:this.position.y+this.radius }
    );
  }

  static createRandom() {
    const speed = MAX_SPEED * random();
    const angle = 2*PI * random();
    return new MovingObject(
      { x: 500*random(), y:500*random() },
      { x: speed*cos(angle), y: speed*sin(angle) }
    );
  }

  static createRandomOutsideCanvas() {
    const movingObject = MovingObject.createRandom()

    let direction = sample(['left', 'right', 'top', 'bottom'])

    switch(direction) {
      case 'left':
        movingObject.position.x = 0 - movingObject.radius
        break
      case 'right':
        movingObject.position.x = 500 + movingObject.radius
        break
      case 'top':
        movingObject.position.y = 0 - movingObject.radius
        break
      case 'bottom':
        movingObject.position.y = 500 + movingObject.radius
        break
    }

    return movingObject
  }
}
