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
    var hours = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'tweleve', 'thirteen', 'fourteen', 'fiteen', 'sixteen', 'seventeen', 'eighteen', 'ninteen', 'twenty', 'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five', 'twenty six', 'twenty seven', 'twenty eight', 'twenty nine'];
    var h = parseInt(readLine());
    var m = parseInt(readLine());
    if (m === 0) {
        console.log(hours[h] + ' o\' clock');
    } else if (m === 1) {
        console.log(m + ' minute past ' + hours[h]);
    } else if (m === 45) {
        console.log('quarter to ' + hours[h + 1]);
    } else if (m === 15) {
        console.log('quarter past ' + hours[h]);
    } else if (m < 30) {
        console.log(hours[m] + ' minutes past ' + hours[h]);
    } else if (m > 30) {
        console.log(hours[60 - m] + ' minutes to ' + hours[h + 1]);
    } else if (m === 30) {
        console.log('half past ' + hours[h]);
    }
}