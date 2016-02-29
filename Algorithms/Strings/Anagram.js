function processData(input) {
    var t = parseInt(input.split('\n')[0]);
    for (var i = 1; i <= t; i++) {
        var str = input.split('\n')[i];
        if (str.length % 2 !== 0) {
            console.log('-1');
        } else {
            var common = [];
            var strLen = str.length;
            var second = str.substring(strLen / 2);
            for (var j = 0; j < strLen / 2; j++) {
                var pos = second.indexOf(str[j]);
                if (pos >= 0) {
                    second = second.slice(0, pos) + second.slice(pos + 1);
                    common.push(str[j]);
                }
            }
            console.log(strLen / 2 - common.length);
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