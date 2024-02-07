/* 
Find the longest substring in alphabetical order.
Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".
There are tests with strings up to 10 000 characters long so your code will need to be efficient.
The input will only consist of lowercase characters and will be at least one letter long.
If there are multiple solutions, return the one that appears first.
Good luck :) 
*/

function longest(str) {
  let longest = "";
  let current = str[0];
  for (let i = 1; i < str.length; i++) {
    if (str[i] >= str[i - 1]) {
      current += str[i];
    } else {
      if (current.length > longest.length) {
        longest = current;
      }
      current = str[i];
    }
  }
  return current.length > longest.length ? current : longest;
}
