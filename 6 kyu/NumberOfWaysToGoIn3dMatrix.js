/* 
Task
Imagine you have a 3D matrix with the size given as 3 integers: width, depth, height (x,y,z).
You start at a corner point (1,1,1) and in each step you can move just in one direction:
x -> x+1
or y -> y+1
or z -> z+1.
You can not go diagonally or backwards.
Your task is to calculate in how many ways you can go from point (1,1,1) to the point (x,y,z).

Example
For a simple example we can check a flat matrix with size: width=3, depth=3, height=1.
We start at the green top left cell.
To get to the orange cell we have 2 possible ways: go from top or from left.
To get to blue cells we have 3 possible ways: go from cell with 1 or from cell with 2 options which gives 3 possible options in total.
And finally to get to the red cell we have 6 possible options for how we can get there.
But our matrix will not always have height of 1.

Input
As input you will receive 3 integers (x,y,z) from 1 to 100, which describes the size of the matrix: width, depth, height.
All inputs will be valid.

Output
As output you should return the number of ways you can go from the starting point (1,1,1) to the opposite point (x,y,z).
Output should be returned as a BigInt number for Javascript and a regular int for Python. 
*/

const waysIn3dMatrix = (x, y, z) => {
  const factorial = (n) => {
    if (n === 0n) return 1n;
    return BigInt(n) * factorial(BigInt(n - 1));
  };
  return (
    factorial(BigInt(x + y + z - 3)) /
    (factorial(BigInt(x - 1)) *
      factorial(BigInt(y - 1)) *
      factorial(BigInt(z - 1)))
  );
};
