export default class BoundingBox {
  constructor(min, max) {
    this.min = min;
    this.max = max;
  }

  intersects(boundingBox) {
    return !(
      this.max.x < boundingBox.min.x ||
      this.min.x > boundingBox.max.x ||
      this.max.y < boundingBox.min.y ||
      this.min.y > boundingBox.max.y
    );
  }

};
