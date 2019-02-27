import MovingObject from '/js/classes/movingObject.js'
import Canvas from '/js/utility/Canvas.js'
const { cos, sin } = Math

export default class Ship extends MovingObject {
  direction = 0
  color = 'red'

  acceleration() {
    const { direction } = this
    const magnitude = .1

    return {
      x: magnitude*cos(direction),
      y: magnitude*sin(direction)
    }
  }

  move() {
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
