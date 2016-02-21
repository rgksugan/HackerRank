function processData(input) {
    var arr = input.split('\n')[1].split(' ').map(Number);
    var z = 0;
    for (var i = 1; i < arr.length; i++) {
        j = i;
        while (arr[j] < arr[j - 1] && j >= 0) {
            var temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
            j--;
            z++;
        }
    }
    console.log(z);
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