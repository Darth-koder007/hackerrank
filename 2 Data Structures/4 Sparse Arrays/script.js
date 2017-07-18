/**
 * Sparse array class
 */
class SparseArray {
  /**
   * Sparse Arrays Constructor
   * @param  {Array} array
   */
  constructor(array) {
    this.array = array;
  }

  /**
   * matcharray function takes array as param
   * @param  {Array} arr
   * @return {Array}
   */
  matchArray(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
      newArr[i] = this.array.filter((ele) => ele === arr[i]);
      newArr[i] = newArr[i].length;
    }
    return newArr;
  }
}

export { SparseArray };
