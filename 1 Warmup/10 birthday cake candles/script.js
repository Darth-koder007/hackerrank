/**
 * calculate number of heighest candles in given input
 * @return {String} canddleBlownCount count of heighest candles
 */
function main() {
    let n = parseInt(readLine());
    let height = readLine().split(' ');
    height = height.map(Number);

    let greatestHeight = 0;
    let candleBlownCount = 0;

    for (let i = 0; i < n; i++) {
        if (height[i] >= greatestHeight) {
            greatestHeight = height[i];
        }
    }

    for (let i = 0; i < n; i++) {
        if (height[i] === greatestHeight) {
            candleBlownCount++;
        }
    }

    process.stdout.write(candleBlownCount.toString());
    return candleBlownCount.toString();
}

main();
