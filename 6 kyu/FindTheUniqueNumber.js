/* 
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance. 
*/

function findUniq(arr) {
  const counts = {};

  // Count occurrences of each number
  arr.forEach((num) => {
    counts[num] = (counts[num] || 0) + 1;
  });

  // Find the unique number with a count of 1
  const uniqueNumber = Object.keys(counts).find((key) => counts[key] === 1);

  return Number(uniqueNumber);
}
console.log(findUniq([0, 0, 0.55, 0, 0]));
