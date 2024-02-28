/* 
A palindrome is a series of characters that read the same forwards as backwards such as "hannah", "racecar" and "lol".
For this Kata you need to write a function that takes a string of characters and returns the length, as an integer value, 
of longest alphanumeric palindrome that could be made by combining the characters in any order but using each character only once. 
The function should not be case sensitive.
For example if passed "Hannah" it should return 6 and if passed "aabbcc_yYx_" it should return 9 because one possible palindrome would be "abcyxycba". 
*/

function longestPalindrome(inputStr) {
  const str = inputStr.toLowerCase();

  // Initialize a frequency map for characters
  const charFrequency = new Map();

  // Populate the frequency map
  for (const char of str) {
    if (char.match(/[a-z0-9]/)) {
      charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
    }
  }

  let maxLength = 0;
  let hasOddFrequency = false;

  // Calculate the length of the longest palindrome
  for (const count of charFrequency.values()) {
    if (count % 2 === 0) {
      maxLength += count;
    } else {
      maxLength += count - 1;
      hasOddFrequency = true;
    }
  }

  // Add 1 if there's at least one character with an odd frequency
  if (hasOddFrequency) {
    maxLength += 1;
  }

  return maxLength;
}
