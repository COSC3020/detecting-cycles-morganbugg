const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

var graph = []
assert(JSON.stringify(hasCycle(graph)) == 'false');
// return false for empty graph

var graph = [[]]
assert(JSON.stringify(hasCycle(graph)) == 'false');
// return false for graph with one node and no edges

var graph = [
    [1],
    [0],
    [],
    [4],
    [2]
]
assert(JSON.stringify(hasCycle(graph)) == 'true');
// multiple disconnected components, return true if any have a cycle

var graph = [
    [0]
]
assert(JSON.stringify(hasCycle(graph)) == 'true');
// return true for self loop