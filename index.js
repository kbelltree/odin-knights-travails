class Position {
  constructor([x, y], previousCoordinates = null, depth = 0) {
    (this.coordinates = [x, y]),
      (this.previousCoordinates = previousCoordinates),
      (this.depth = depth);
  }
}

// Check if the XY coordinates passed is within the range
function isWithinRange([x, y]) {
  return x >= 0 && x <= 7 && y >= 0 && y <= 7;
}

// Calculate knight's 8 moves
function getPossibleMoves([x, y]) {
  return [
    [x - 2, y + 1],
    [x - 2, y - 1],
    [x - 1, y + 2],
    [x - 1, y - 2],
    [x + 1, y + 2],
    [x + 1, y - 2],
    [x + 2, y + 1],
    [x + 2, y - 1],
  ];
}

// Return the path by tracing back the nodes from goal to start
function collectPath(endPosition) {
  let path = [];
  let currentPosition = endPosition;

  // Track back the previous coordinates from the current till the start
  do {
    path.push(currentPosition.coordinates);
    currentPosition = currentPosition.previousCoordinates;
  } while (currentPosition !== null);

  // Reverse the order of stored coordinates in path
  return path.reverse();
}

// Print the path in customized format
function formatForPrint(pathArray, depth) {
  const stringifiedArray = pathArray
    .map((innerArray) => `[${innerArray}]`)
    .join("=>");
  return `You made it in ${depth} moves!  Here's your path: ${stringifiedArray}`;
}

function knightMoves(startPosition, endPosition) {
  // Edge: If coordinates exceeds the grid size, exit
  if (!isWithinRange(startPosition) || !isWithinRange(endPosition)) {
    throw new Error(
      "The start and the goal coordinates must be integers between 0 and 7."
    );
  }

  // Add the starting XY coordinates to the queue
  let queue = [new Position(startPosition)];

  // Track the visited XY coordinates to avoid re-visiting
  let visited = new Set();
  while (queue.length > 0) {
    // Take out the first XY from the queue
    let currentPosition = queue.shift();
    visited.add(currentPosition.coordinates.toString());

    // If the current XY matches the goal XY, return the path
    if (
      currentPosition.coordinates[0] === endPosition[0] &&
      currentPosition.coordinates[1] === endPosition[1]
    ) {
      let result = collectPath(currentPosition);
      return formatForPrint(result, currentPosition.depth);
    }

    // Otherwise, move on to next moves to continue find matching coordinates
    let possibleMoves = getPossibleMoves(currentPosition.coordinates);
    for (let movePosition of possibleMoves) {
      if (
        isWithinRange(movePosition) &&
        !visited.has(movePosition.toString())
      ) {
        let nextMovePosition = new Position(
          movePosition,
          currentPosition,
          currentPosition.depth + 1
        );
        queue.push(nextMovePosition);
      }
    }
  }
}

module.exports = { knightMoves };
