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
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var t = parseInt(n_temp[1]);
    width = readLine().split(' ');
    width = width.map(Number);
    for (var a0 = 0; a0 < t; a0++) {
        var i_temp = readLine().split(' ');
        var i = parseInt(i_temp[0]);
        var j = parseInt(i_temp[1]);
        var min = 3;
        for (x = i; x <= j; x++) {
            if (min > width[x]) {
                min = width[x];
                if (min === 1) {
                    break;
                }
            }
        }
        console.log(min);
    }

}