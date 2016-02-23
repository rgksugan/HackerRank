function processData(input) {
    var lines = input.split('\n');
    var t = parseInt(lines[0]);
    for (var i = 1; i < lines.length; i++) {
        var aa = lines[i].split(' ').map(Number);
        var counter = 0;
        for (var j = aa[0]; j <= aa[1];) {
            if ((Math.sqrt(j) + '') % 1 === 0) {
                counter++;
                var sqr = Math.sqrt(j);
                var nextSqr = (sqr + 1) * (sqr + 1);
                j = nextSqr;
            } else {
                j += 1;
            }
        }
        console.log(counter);
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