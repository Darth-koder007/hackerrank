/**
 * main reads a and b and compute if ai > bi or ai < bi or ai = bi
 * It's basically compare triplets
 *
 * @return {String} description
 */
function main() {
  let aTemp = readLine().split(' ');
  let a0 = parseInt(aTemp[0]);
  let a1 = parseInt(aTemp[1]);
  let a2 = parseInt(aTemp[2]);
  let bTemp = readLine().split(' ');
  let b0 = parseInt(bTemp[0]);
  let b1 = parseInt(bTemp[1]);
  let b2 = parseInt(bTemp[2]);
  let pointsA = 0;
  let pointsB = 0;

  (a0 > b0 && a0 !== b0) ? pointsA++ : ((a0 < b0) ? pointsB++ : null);
  (a1 > b1 && a1 !== b1) ? pointsA++ : ((a1 < b1) ? pointsB++ : null);
  (a2 > b2 && a2 !== b2) ? pointsA++ : ((a2 < b2) ? pointsB++ : null);

  process.stdout.write(pointsA + ' ' + pointsB);

  return pointsA + ' ' + pointsB;
}
