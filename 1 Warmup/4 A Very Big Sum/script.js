/**
 * store total sum
 * @type {Number}
 */

let sum = 0;

/**
 * Read input and calculate sum of very large array
 *
 * @return {Number} sum Total sum
 */
function main() {
    let n = parseInt(readLine());
    let arr = readLine().split(' ');
    arr = arr.map(Number);
    console.log(sum);
    return sum;
}

/**
 * Array map callback function
 *
 * @param {Number} val The current element being processed in the array
 * @return {Number} sum sum after every element is processed
 */
function Number(val) {
  return sum += parseInt(val);
}
