/**
 * main function returns staircase formation using #
 * having equal base and height of input n
 * @return {String} stairCase staircase pattern
 */
function main() {
  let n = parseInt(readLine());
  let stairCase = '';

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j >= (n-1)-i) {
        stairCase += "#";
      } else {
        stairCase += " ";
      }
    }
    stairCase += "\n";
  }
  process.stdout.write(stairCase);

  return stairCase;
}
