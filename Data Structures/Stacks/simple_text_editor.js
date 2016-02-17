function processData(input) {
  var lines = input.split('\n');
  var q = parseInt(lines[0]);
  var str = '';
  var k;
  var commands = [];
  for (var i = 1; i <= q; i++) {
    var command = parseInt(lines[i].split(' ')[0]);
    if (command === 1) {
      commands.push(str);
      str += lines[i].split(' ')[1];
    } else if (command === 2) {
      commands.push(str);
      k = parseInt(lines[i].split(' ')[1]);
      str = str.substring(0, str.length - k);
    } else if (command === 3) {
      k = parseInt(lines[i].split(' ')[1]);
      console.log(str[k - 1]);
    } else {
      str = commands.pop();
    }
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