function processData(input) {
  var v = parseInt(input.split('\n')[0]);
  var arr = input.split('\n')[2].split(' ').map(Number);
  console.log(arr.indexOf(v));
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