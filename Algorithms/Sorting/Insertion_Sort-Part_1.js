function processData(input) {
    var lines = input.split('\n');
    var size = parseInt(lines[0]);
    var arr = lines[1].split(' ');
    var no = arr[arr.length - 1];
    for (var i = arr.length - 2; i >= -1; i--) {
        if (arr[i] > no) {
            arr[i + 1] = arr[i];
        } else {
            arr[i + 1] = no;
            i = -2;
        }
        console.log(arr.join(' '));
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