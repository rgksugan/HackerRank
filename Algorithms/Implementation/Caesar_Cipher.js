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
    var s = readLine();
    var k = parseInt(readLine());
    k = k % 26;
    var result = '';
    for (var i = 0; i < n; i++) {
        var char = s.charCodeAt(i);
        if (char >= 65 && char <= 90) {
            if ((char + k) % 64 > 26) {
                result += String.fromCharCode(64 + ((char - 64 + k) % 26));
            } else {
                result += String.fromCharCode(char + k);
            }
        } else if (char >= 97 && char <= 122) {
            if ((char + k) % 96 > 26) {
                result += String.fromCharCode(96 + ((char - 96 + k) % 26));
            } else {
                result += String.fromCharCode(char + k);
            }
        } else {
            result += s[i];
        }
    }
    console.log(result);
}