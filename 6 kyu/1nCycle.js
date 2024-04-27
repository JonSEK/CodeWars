/* 
Let n be an integer coprime with 10, e.g. 7.
1/7 = 0.142857 142857 142857 ....
We see that the decimal part has a cycle: 142857. The length of this cycle is 6. In the same way:
1/11 = 0.09 09 09 .... Cycle length is 2.

Task
Given an integer n (n > 1) the function cycle(n) returns the length of the cycle if there is one otherwise (n and 10 not coprimes) return -1.

Examples:
cycle(5) = -1
cycle(13) = 6 -> 0.076923 076923 0769
cycle(21) = 6 -> 0.047619 047619 0476
cycle(27) = 3 -> 0.037 037 037 037 0370
cycle(33) = 2 -> 0.03 03 03 03 03 03 03 03
cycle(37) = 3 -> 0.027 027 027 027 027 0
cycle(94) = -1  
*/

function cycle(n) {
  if (n % 2 === 0 || n % 5 === 0) {
    return -1;
  }
  let i = 1;
  let remainder = 10 % n;
  while (remainder !== 1) {
    remainder = (remainder * 10) % n;
    i++;
  }
  return i;
}
