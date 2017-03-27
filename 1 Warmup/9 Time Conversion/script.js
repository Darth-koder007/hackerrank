/**
 * converts regular time to army time
 * @return {String} armyTime Army time strings
 */
function main() {
    let time = readLine();
    let armyTime = '';

    if (time.indexOf('PM') !== -1) {
        time = time.replace('PM', '');
        time = time.split(':');

        if (parseInt(time[0]) === 12) {
            time[0] = 0 + '' + 0;
        }
        armyTime = (parseInt(time[0]) + 12) + ':' + time[1] + ':' + time[2];
    } else if (time.indexOf('AM') !== -1) {
        time = time.replace('AM', '');
        time = time.split(':');

        if (parseInt(time[0]) === 12) {
            time[0] = 0 + '' + 0;
        }
        armyTime = time[0] + ':' + time[1] + ':' + time[2];
    }
    process.stdout.write(armyTime);

    return armyTime;
}
