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
    var t = parseInt(readLine());
    for (var a0 = 0; a0 < t; a0++) {
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var c = parseInt(n_temp[1]);
        var m = parseInt(n_temp[2]);
        var chocolates = parseInt(n / c);
        var moneyInHand = n % c + (parseInt(chocolates / m) * c);
        var remainingWrapper = chocolates % m;
        var offer = 0;
        while (moneyInHand >= c) {
            var oC = parseInt(moneyInHand / c);
            offer += oC;
            remainingWrapper += oC % m;
            moneyInHand = moneyInHand % c + (parseInt(oC / m) * c);
            if (remainingWrapper >= m) {
                moneyInHand += parseInt(remainingWrapper / m) * c;
                remainingWrapper = remainingWrapper % m;
            }
        }
        console.log(chocolates + offer);
    }

}