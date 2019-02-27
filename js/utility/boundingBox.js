export default class BoundingBox {
  constructor(min, max) {
    this.min = min;
    this.max = max;
  }

  intersects(boundingBox) {
    return !(
      this.isRightOf(boundingBox) ||
      this.isLeftOf(boundingBox) ||
      this.isAbove(boundingBox) ||
      this.isBelow(boundingBox)
    )
  }

  isLeftOf(boundingBox) {
    return this.max.x < boundingBox.min.x
  }

  isRightOf(boundingBox) {
    return this.min.x > boundingBox.max.x
  }

  isBelow(boundingBox) {
    return this.min.y > boundingBox.max.y
  }

  isAbove(boundingBox) {
    return this.max.y < boundingBox.min.y
  }

};
