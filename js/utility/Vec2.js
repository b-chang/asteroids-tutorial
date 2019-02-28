const { cos, atan2, hypot, sin } = Math;

export default class Vec2 {
  constructor({ x = 0, y = 0 } = {}) {
    this.x = x
    this.y = y
  }

  get direction() {
    return atan2(this.y, this.x)
  }

  get magnitude() {
    return hypot(this.x, this.y)
  }

  static fromMagnitudeAndDirection({ magnitude = 1, direction = 0 }) {
    return new Vec2({
        x: magnitude * cos(direction),
        y: magnitude * sin(direction),
    })
  }
}
