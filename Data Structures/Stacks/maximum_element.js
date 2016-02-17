function processData(input) {
    var lines = input.split('\n');
    var n = parseInt(lines[0]);
    var arr = [];
    var max = 0;
    for (i = 1; i <= n; i++) {
        var args = lines[i].split(' ');
        var type = parseInt(args[0]);
        if (type === 1) {
            var newNum = parseInt(args[1]);
            if (newNum > max) {
                max = newNum;
            }
            arr.push(newNum);
        } else if (type === 2) {
            var oldNum = arr.pop();
            if (oldNum === max) {
                var tmp = arr.slice();
                tmp.sort(function(a, b) {
                    return b - a;
                });
                max = tmp.length > 0 ? tmp[0] : 0;
            }
        } else {
            console.log(max);
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