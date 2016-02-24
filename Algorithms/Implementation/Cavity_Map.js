process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function(data) {
    input_stdin += data;
});

process.stdin.on('end', function() {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    var grid = [];
    var newGrid = [];
    for (var grid_i = 0; grid_i < n; grid_i++) {
        grid[grid_i] = readLine();
        newGrid.push(grid[grid_i]);
    }

    if (n > 2) {
        for (var grid_i = 1; grid_i < n - 1; grid_i++) {
            for (var grid_j = 1; grid_j < n - 1; grid_j++) {
                var cellDepth = parseInt(grid[grid_i][grid_j]);
                if (cellDepth > grid[grid_i - 1][grid_j] && cellDepth > grid[grid_i][grid_j - 1] && cellDepth > grid[grid_i][grid_j + 1] && cellDepth > grid[grid_i + 1][grid_j]) {
                    newGrid[grid_i] = newGrid[grid_i].substr(0, grid_j) + 'X' + newGrid[grid_i].substr(grid_j + 1);
                }
            }
        }
    }
    for (var grid_i = 0; grid_i < n; grid_i++) {
        console.log(newGrid[grid_i]);
    }
}