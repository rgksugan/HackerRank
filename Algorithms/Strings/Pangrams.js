function processData(input) {
    if (input.length < 26) {
        console.log('not pangram');
        return;
    }
    var data = [];
    input = input.toLowerCase();
    for (var i = 0; i < input.length; i++) {
        if (input.charCodeAt(i) >= 97 && input.charCodeAt(i) <= 122) {
            data.push(input.charCodeAt(i));
        }
    }
    data = data.map(Number);
    data.sort(function(a, b) {
        return a - b;
    });
    var flag = true;
    for (var i = 0; i < data.length - 1; i++) {
        if (data[i + 1] - data[i] > 1) {
            flag = false;
            break;
        }
    }
    console.log(flag ? 'pangram' : 'not pangram');
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