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
    var a = [];
    for (a_i = 0; a_i < n; a_i++) {
        a[a_i] = readLine().split(' ');
        a[a_i] = a[a_i].map(Number);
    }
    var count1 = 0;
    var count2 = 0;
    for (i = 0, j = n - 1; i < n; i++, j--) {
        count1 += a[i][i];
        count2 += a[j][i];
    }
    console.log(Math.abs(count1 - count2));
}