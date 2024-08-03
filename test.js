const { knightMoves } = require("./index.js");

console.log("From [0,0] to [3,3]: ", knightMoves([0, 0], [3, 3]));
console.log("From [3,3] to [0,0]: ", knightMoves([3, 3], [0, 0]));
console.log("From [0,0] to [7,7]: ", knightMoves([0, 0], [7, 7]));
console.log("From [3,5] to [6,1]: ", knightMoves([3, 5], [6, 1]));

// Test an out of range position will throw error
console.log(knightMoves([0, 8], [0, 5]));
