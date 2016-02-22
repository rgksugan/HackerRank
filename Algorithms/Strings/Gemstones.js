function processData(input) {
    var n = parseInt(input.split('\n')[0]);
    var str = '';
    for (var i = 1; i <= n; i++) {
        var currentStr = input.split('\n')[i];
        var currentLength = currentStr.length;
        if (i === 1) {
            for (var j = 0; j < currentLength; j++) {
                if (str.indexOf(currentStr[j]) < 0) {
                    str += currentStr[j];
                }
            }
        } else {
            var strLength = str.length;
            var newStr = str;
            for (var k = 0; k < strLength; k++) {
                if (currentStr.indexOf(str[k]) < 0) {
                    var z = newStr.indexOf(str[k]);
                    newStr = newStr.substring(0, z) + newStr.substring(z + 1, newStr.length);
                }
            }
            str = newStr;
        }
    }
    console.log(str.length);
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