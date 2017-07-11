/**
 * ArrayRotation class
 */
class ArrayRotation {
  /**
   * ArrayRotation constructor function
   * @param  {Array} array [array of numbers]
   */
  constructor(array) {
    this.array = array;
  }

  /**
   * Rotate array
   * @param  {Number} rotations [Number of rotations to be performed]
   * @param  {String} direction [direction of rotation]
   * @return {Array}           [Rotated array]
   */
  rotate(rotations, direction) {
    //  Assign direction to right by default
    direction = direction || 'right';

    //  Store current array value
    let array = JSON.parse(JSON.stringify(this.array));

    //  This will hold rotated array
    let newArr = [];

    switch(direction) {

      //  Perform right rotation
      case 'right':
        for(let i = 0; i < rotations; i++) {
          newArr.unshift(array.pop());
        }

        newArr = newArr.concat(array);
        break;

      //  Perform left rotation
      case 'left':
        for(let i = 0; i < rotations; i++) {
          newArr.push(array.shift());
        }

        newArr = array.concat(newArr);
        break;

      //  Show prompt incase of invalid direction
      default:
        return 'Rotation direction can be left or right';
    }

    return newArr;
  }
}
