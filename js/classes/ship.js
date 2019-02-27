import MovingObject from '/js/classes/movingObject.js'
import Canvas from '/js/utility/Canvas.js'
import key from '/js/utility/keymaster.js'
const { cos, sin } = Math

export default class Ship extends MovingObject {
  direction = 0
  color = 'red'

  acceleration() {
    const { direction } = this

    let magnitude = 0;
    if(key.isPressed('up')) {
      magnitude = .1
    }

    return {
      x: magnitude*cos(direction),
      y: magnitude*sin(direction)
    }
  }

  turn() {
    if(key.isPressed('left')) {
      this.direction -= .1
    }

    if(key.isPressed('right')) {
      this.direction += .1
    }
  }

  move() {
    this.turn()
    this.wrap()
    const acceleration = this.acceleration()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
    this.velocity.x += acceleration.x
    this.velocity.y += acceleration.y
  }

  frontPosition() {
    const { direction, radius, position } = this

    return {
      x: position.x + radius*cos(direction),
      y: position.y + radius*sin(direction)
    }
  }

  wrap() {
    if(!this.isOutOfBounds()) { return }

    let shipBB = this.getBoundingBox()
    let canvasBB = Canvas.getBoundingBox()

    if(shipBB.isRightOf(canvasBB)) {
      this.position.x = 0 - this.radius
    } else if (shipBB.isLeftOf(canvasBB)) {
      this.position.x = 500 + this.radius
    } else if (shipBB.isAbove(canvasBB)) {
      this.position.y = 500 + this.radius
    } else if (shipBB.isBelow(canvasBB)) {
      this.position.y = 0 - this.radius
    }
  }

  draw() {
    const frontPosition = this.frontPosition()

    Canvas.drawCircle({
      x: this.position.x,
      y: this.position.y,
      radius: this.radius,
      color: this.color
    })

    Canvas.drawCircle({
      ...frontPosition,
      radius: 5,
      color: this.color,
      lineWidth: 5
    })
  }
}
