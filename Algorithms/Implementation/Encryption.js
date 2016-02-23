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
    var s = readLine().replace(' ', '');
    var l = s.length;
    var sl = Math.floor(Math.sqrt(l));
    var su = Math.ceil(Math.sqrt(l));
    var finalStr = '';
    for (var i = 0; i < su; i++) {
        for (var j = 0; i + j < l; j += su) {
            finalStr += s[i + j];
        }
        finalStr += ' ';
    }
    console.log(finalStr);
}