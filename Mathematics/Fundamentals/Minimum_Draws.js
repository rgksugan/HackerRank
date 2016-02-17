function processData(input) {
  var lines = input.split('\n');
  var t = parseInt(lines[0]);
  for (i = 1; i <= t; i++) {
    console.log(parseInt(lines[i]) + 1);
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