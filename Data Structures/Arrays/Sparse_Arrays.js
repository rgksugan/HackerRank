function processData(input) {
    var lines = input.split('\n');
    while (lines.length > 0) {
        var n = parseInt(lines.shift());
        var strings = [];
        for (var i = 1; i <= n; i++) {
            strings.push(lines.shift());
        }
        var q = parseInt(lines.shift());
        var queries = [];
        for (var j = 1; j <= q; j++) {
            var query = lines.shift();
            var k = 0;
            var idx = strings.indexOf(query, k);
            var z = 0;
            while (idx >= 0) {
                k = idx + 1;
                idx = strings.indexOf(query, k);
                z++;
            }
            console.log(z);
        }
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