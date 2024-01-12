/* 
1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246. Squaring these divisors we get: 1, 60516, 4, 15129, 9, 6724, 36, 1681. The sum of these squares is 84100 which is 290 * 290.

Task
Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of their squared divisors is itself a square.
We will return an array of subarrays or of tuples (in C an array of Pair) or a string. 
The subarrays (or tuples or Pairs) will have two elements: first the number the squared divisors of which is a square and then the sum of the squared divisors.

Example:
list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
list_squared(42, 250) --> [[42, 2500], [246, 84100]] 
*/

function listSquared(m, n) {
  const result = [];
  for (let i = m; i <= n; i++) {
    const divisors = getDivisors(i);
    const sum = divisors.reduce((acc, curr) => acc + curr * curr, 0);
    if (Math.sqrt(sum) % 1 === 0) result.push([i, sum]);
  }
  return result;
}

function getDivisors(num) {
  const divisors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) divisors.push(i);
  }
  return divisors;
}

console.log(listSquared(1, 250)); // [[1, 1], [42, 2500], [246, 84100]]
console.log(listSquared(42, 250)); // [[42, 2500], [246, 84100]]
console.log(listSquared(250, 500)); // [[287, 84100]]