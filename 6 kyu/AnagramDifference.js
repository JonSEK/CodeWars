/* 
Given two words, how many letters do you have to remove from them to make them anagrams?

Example
First word : c od e w ar s (4 letters removed)
Second word : ha c k er r a nk (6 letters removed)
Result : 10

Hints
A word is an anagram of another word if they have the same letters (usually in a different order).
Do not worry about case. All inputs will be lowercase. 
*/

function anagramDifference(w1, w2) {
  let w1Arr = w1.split("");
  let w2Arr = w2.split("");
  let count = 0;
  for (let i = 0; i < w1Arr.length; i++) {
    if (w2Arr.includes(w1Arr[i])) {
      w2Arr.splice(w2Arr.indexOf(w1Arr[i]), 1);
    } else {
      count++;
    }
  }
  return count + w2Arr.length;
}
