/**
 * HourGlassProblem Class
 */
class HourGlassProblem {

  /**
   * HourGlassProblem class constructor
   * @param  {Array} hourGlassCollection
   */
  constructor(hourGlassCollection) {
    this.hourGlassCollection = hourGlassCollection;
  }

  /**
   * Get hour glass collection
   * @return {Array} hourGlassCollection
   */
  getHourGlassCollection() {
    return this.hourGlassCollection;
  }

  /**
   * Get all hourglass in a collection
   * @return {Number} largestSum
   */
  getAllHourGlassesFromCollection() {
    if(this.hourGlassCollection) {
      let largestSum;
      let currentSum = 0;
      for(let i = 0; i < this.hourGlassCollection.length; i++) {
        for(let j = 0; j < this.hourGlassCollection[i].length; j++) {
          currentSum = this.iterateHourGlass(i, j);
          if (!isNaN(currentSum) && isNaN(largestSum)) {
            largestSum = currentSum;
          } else if (currentSum > largestSum) {
            largestSum = currentSum;
          }
        }
      }

      return largestSum;
    }
  }


  /**
   * Iterate hour glass elements
   * @param  {Array} row
   * @param  {Number} column
   * @return {Number}
   */
  iterateHourGlass(row, column) {
    if ((row + 3 > this.hourGlassCollection.length)
    || (column + 3 > this.hourGlassCollection[row].length)) {
      return;
    }

    let newRow = row + 3;
    let newColumn = column + 3;
    let sum = 0;

    for(let i = row; i < newRow; i++) {
      for(let j = column; j < newColumn; j++) {
        if (!((i === newRow - 2) && (j === column || j === newColumn - 1))) {
          sum = sum + this.hourGlassCollection[i][j];
        }
      }
    }
    return sum;
  }

}

/**
 * Initialize new hourglass collection
 * @type {Array}
 */
let hourGlassCollection = new HourGlassProblem([
  [-1, -1, 0, -9, -2, -2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, -3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5],
]);

/**
 * function calls
 */
hourGlassCollection.getHourGlassCollection();
hourGlassCollection.getAllHourGlassesFromCollection();
