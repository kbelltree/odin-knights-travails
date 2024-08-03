# odin-knights-travails

## Project: Knights Travails

This project implements a function that finds the shortest path for a Knight to move from one square to another on a chessboard using a graph. For comprehensive details on this project, please refer to [The Odin Project - Project: Knights Travails.](https://www.theodinproject.com/lessons/javascript-knights-travails)

## Key Project Instructions:

- **Functionality**: <br> Implement `knightMoves` that accepts two-dimensional coordinates [x, y] for the start and end points, and returns the shortest path between them.

- **Knight's Move**: <br> Valid moves are 2 vertical steps and 1 horizontal step, or 1 vertical step and 2 horizontal steps, in any direction.

- **Board Size**: <br> The chess board size is 8x8. Moves should not exceed these bounds.

- **Answer Path**: <br> If multiple shortest paths exist, any valid one may be returned.

- **Search Algorithm**: <br> Utilize an efficient algorithm to determine the shortest path.

- **Example Output**:

  ```
  > knightMoves([3,3],[4,3])
  => You made it in 3 moves!  Here's your path:
    [3,3]
    [4,5]
    [2,4]
    [4,3]
  ```

- **GUI:** <br>
  A graphical user interface is not required for this project.

**[Link to My Final Solution](./index.js)**

## Built With

- JavaScript
- ESLint
- Prettier

---

### Referenced Tutorials

- [The breadth-first search algorithm by Khan Academy](https://www.khanacademy.org/computing/computer-science/algorithms/breadth-first-search/a/the-breadth-first-search-algorithm)

- [Sets in JavaScript – How to work with set data structure in JS by Codedamn](https://codedamn.com/news/javascript/sets-in-javascript-2#)
