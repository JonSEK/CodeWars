/* 
You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. 
By this I mean the internal letters will move out, and the external letters move toward the centre.
If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.
An example should clarify:
'taxi' would become 'atix' 'taxis' would become 'atxsi' 
*/

function insideOut(x) {
  return x
    .split(" ")
    .map((word) => {
      if (word.length < 4) return word;
      const mid = Math.floor(word.length / 2);
      return word.length % 2 === 0
        ? word.slice(0, mid).split("").reverse().join("") +
            word.slice(mid).split("").reverse().join("")
        : word.slice(0, mid).split("").reverse().join("") +
            word[mid] +
            word.slice(mid + 1).split("").reverse().join("");
    })
    .join(" ");
}