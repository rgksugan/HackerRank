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
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    arr.sort(function(a, b) {
        return a - b;
    });
    var positiveArray = 0;
    var negativeArray = 0;
    var zeroArray = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negativeArray++;
        } else if (arr[i] > 0) {
            positiveArray++;
        } else {
            zeroArray++;
        }
    }
    console.log(positiveArray / arr.length);
    console.log(negativeArray / arr.length);
    console.log(zeroArray / arr.length);
}