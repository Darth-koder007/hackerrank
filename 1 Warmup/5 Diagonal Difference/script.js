/**
 * Store sum of diagnol 1
 * @type {Number} sumD1
 */
let sumD1 = 0;

/**
 * Store sum of diagnol 2
 * @type {Number} sumD2
 */
let sumD2 = 0;

/**
 * Calculate two diagnoals sum and return there absolute difference
 *
 * @return {Number} diff absolute difference of both diagnols sum
 */
function main() {
  let n = parseInt(readLine());
  let a = [];

  for(let aI = 0; aI < n; aI++) {
    a[aI] = readLine().split(' ');
    a[aI] = a[aI].map(
      function number(val, i, arr) {
      if (aI === i) {
        sumD1 += parseInt(val);
      }
      if (((n-1) - aI) === i) {
        sumD2 += parseInt(val);
      }
      return val;
    });
  }

  let diff = Math.abs(sumD1 - sumD2);
  process.stdout.write(diff);

  sumD1 = 0;
  sumD2 = 0;

  return diff;
}
