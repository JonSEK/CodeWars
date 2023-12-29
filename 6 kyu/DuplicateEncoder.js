/* 
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, 
or ")" if that character appears more than once in the original string. 
Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("  
*/

function duplicateEncode(word) {
  let result = "";
  let wordArr = word.toLowerCase().split("");
  for (let i = 0; i < wordArr.length; i++) {
    let count = 0;
    for (let j = 0; j < wordArr.length; j++) {
      if (wordArr[i] === wordArr[j]) {
        count++;
      }
    }
    if (count > 1) {
      result += ")";
    } else {
      result += "(";
    }
  }
  return result;
}