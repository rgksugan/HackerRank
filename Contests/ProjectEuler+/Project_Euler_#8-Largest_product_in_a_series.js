function processData(input) {
    var lines = input.split('\n');
    var t = parseInt(lines[0]);
    for (var i = 1; i <= t * 2; i += 2) {
        var n = parseInt(lines[i].split(' ')[0]);
        var k = parseInt(lines[i].split(' ')[1]);
        var max = 0;
        var fullNumber = lines[i + 1];
        for (var j = 0; j < n - k; j++) {
            var splitNumber = fullNumber.substring(j, j + k);
            var product = 1;
            for (var x = 0; x < k; x++) {
                product *= parseInt(splitNumber[x]);
            }
            if (product > max) {
                max = product;
            }
        }
        console.log(max);
    }
}

process.stdin.resume();
process.stdin.setEncoding('ascii');
_input = '';
process.stdin.on('data', function(input) {
    _input += input;
});

process.stdin.on('end', function() {
    processData(_input);
});