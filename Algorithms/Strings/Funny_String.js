function processData(input) {
    var t = parseInt(input.split('\n')[0]);
    for (var i = 1; i <= t; i++) {
        var str = input.split('\n')[i];
        var rev = str.split('').reverse().join('');
        var isFunny = true;
        for (var j = 1; j < str.length; j++) {
            if (Math.abs(str.charCodeAt(j) - str.charCodeAt(j - 1)) !== Math.abs(rev.charCodeAt(j) - rev.charCodeAt(j - 1))) {
                isFunny = false;
                break;
            }
        }
        if (isFunny) {
            console.log('Funny');
        } else {
            console.log('Not Funny');
        }
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