function processData(input) {
    var lines = input.split('\n');
    var t = parseInt(lines[0]);
    for (i = 1; i <= t; i++) {
        var points = lines[i].split(' ');
        points = points.map(function(point) {
            return parseInt(point);
        });
        console.log(points[2] + points[2] - points[0], points[3] + points[3] - points[1]);
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