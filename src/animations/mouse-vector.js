

export default class MouseVector {

  constructor(gridSize) {
    this.gridSize = gridSize;
    this.x = 0;
    this.y = 0;
    this.previous = {
      x: 0,
      y: 0,
    };
  }

  setPrevious() {
    this.previous.x = this.x;
    this.previous.y = this.y;
  }

  /**
   *
   * @param {int} gridSize
   * @param {int} x
   * @param {int} y
   */
  normalize(x, y) {
    const gridSize = this.gridSize;
    this.x = Math.round(x / gridSize) * gridSize;
    this.y = Math.round(y / gridSize) * gridSize;
  }

}