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
    for (i = n; i > 0; i--) {
        var str = '';
        for (j = i - 1; j > 0; j--) {
            str += ' ';
        }
        for (k = n - i + 1; k > 0; k--) {
            str += '#';
        }
        console.log(str);
    }
}