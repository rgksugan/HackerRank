function processData(input) {
  var lines = input.split('\n');
  var t = parseInt(lines[0]);
  for (var i = 1; i <= t; i++) {
    var str = lines[i];
    var arr = [];
    var flag = false;
    for (var j = 0; j < lines[i].length; j++) {
      if (lines[i][j] === '[' || lines[i][j] === '(' || lines[i][j] === '{') {
        arr.push(lines[i][j]);
      } else {
        var poped = arr.pop();
        if ((poped === '{' && lines[i][j] !== '}') || (poped === '(' && lines[i][j] !== ')') || (poped === '[' && lines[i][j] !== ']') || !!!poped) {
          flag = true;
          break;
        }
      }
    }
    if (flag || arr.length !== 0) {
      console.log('NO');
    } else {
      console.log('YES');
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