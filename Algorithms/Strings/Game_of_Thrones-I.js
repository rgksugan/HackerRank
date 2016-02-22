function processData(input) {
    var len = input.length;
    var singleToken = 0;
    var isKey = true;
    var checked = [];
    for(var i=0;i<len;i++) {
        if (checked.indexOf(input[i])<0) {
            checked.push(input[i]);
            var occ = input.match(new RegExp(input[i], 'g')).length;
            if (occ%2 !== 0) {
                singleToken++;
            }
            if (singleToken > 1) {
                isKey = false;
                break;
            }
        }
    }
    if (isKey) {
        console.log('YES');
    } else {
        console.log('NO');
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
