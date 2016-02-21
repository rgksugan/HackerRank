process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function(data) {
    input_stdin += data;
});

process.stdin.on('end', function() {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var time = readLine();
    var phase = time[time.length - 2] + time[time.length - 1];
    time = time.substring(0, time.length - 2);
    var hour = parseInt(time.split(':')[0]);
    if (phase === 'AM') {
        if (hour !== 12) {
            console.log(time);
            return;
        } else {
            console.log(time.replace(time.substring(0, 2), '00'));
            return;
        }
    } else {
        if (hour !== 12) {
            hour += 12;
        }
        if (hour < 10) {
            hour = '0' + hour;
        }
    }
    hour = '' + hour;
    console.log(time.replace(time.substring(0, 2), hour));
}