function processData(input) {
    var lines = input.split('\n');
    var t = parseInt(lines[0]);
    for (var i = 1; i <= t; i++) {
        var count = 0;
        var left = lines[i].substring(0, lines[i].length / 2);
        var right = lines[i].length % 2 === 0 ? lines[i].substring(lines[i].length / 2) : lines[i].substring(lines[i].length / 2 + 1);

        for (j = 0; j < left.length; j++) {
            count += Math.abs(left.charCodeAt(j) - right.charCodeAt(right.length - j - 1));
        }
        console.log(count);
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input) {
    _input += input;
});

process.stdin.on("end", function() {
    processData(_input);
});