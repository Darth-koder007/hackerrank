
/**
 * Count of positive number
 *
 * @type {Number} positiveNumber
 */
let positiveNumber = 0;

/**
 * Count of negative Number
 *
 * @type {Number} negativeNumber
 */
let negativeNumber = 0;

/**
 * Count of zero number
 *
 * @type {Number} zeroNumber
 */
let zeroNumber = 0;

/**
 * Read input and calculate zeroNumber, positiveNumber and negativeNumber
 *
 * @return {String}
 */
function main() {
  let n = parseInt(readLine());
  let arr = readLine().split(' ');
  arr = arr.map(Number);

  console.log(positiveNumber/n);
  console.log(negativeNumber/n);
  console.log(zeroNumber/n);

  return positiveNumber + ' ' + negativeNumber + ' ' + zeroNumber;
}

/**
 * Callback function for array map
 *
 * @param {Number} val Current value being processed in array map
 *
 * @return {Number} val processed value
 */
function Number(val) {
  if (val == 0) {
    zeroNumber++;
  } else if (val > 0) {
    positiveNumber++;
  } else if (val < 0) {
    negativeNumber++;
  }
  return val;
}
