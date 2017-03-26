/**
 * calculates minimal sum and maximal sum from given numbers
 * @return {String} outputString contains minimal and maximal sum
 */
function main() {
    let aTemp = readLine().split(' ');
    let a = parseInt(aTemp[0]);
    let b = parseInt(aTemp[1]);
    let c = parseInt(aTemp[2]);
    let d = parseInt(aTemp[3]);
    let e = parseInt(aTemp[4]);
    let totalSum = 0;
    let aTempLength = aTemp.length;
    let tempSum = [];
    let sortedAtemp = [];

    for (let i = 0; i < aTempLength; i++) {
        totalSum += parseInt(aTemp[i]);
    }

    for (let j = 0; j < aTempLength; j++) {
        tempSum.push(totalSum - parseInt(aTemp[j]));
    }
    sortedAtemp = tempSum.sort();
    process.stdout.write(sortedAtemp[0] + " " + sortedAtemp[aTempLength - 1]);
    let outputString = sortedAtemp[0] + " " + sortedAtemp[aTempLength - 1];

    return outputString;
}
