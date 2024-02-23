/* 
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:
encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"
encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"

Together with the encryption function, you should also implement a decryption function which reverses the process.
If the string S is an empty value or the integer N is not positive, return the first argument without changes. 
*/

function encrypt(text, n) {
  if (text === null || text === "" || n <= 0) {
    return text;
  }
  let result = text;
  for (let i = 0; i < n; i++) {
    let odd = "";
    let even = "";
    for (let j = 0; j < result.length; j++) {
      if (j % 2 === 0) {
        even += result[j];
      } else {
        odd += result[j];
      }
    }
    result = odd + even;
  }
  return result;
}

function decrypt(encryptedText, n) {
  if (encryptedText === null || encryptedText === "" || n <= 0) {
    return encryptedText;
  }
  let result = encryptedText;
  for (let i = 0; i < n; i++) {
    let odd = result.slice(0, result.length / 2);
    let even = result.slice(result.length / 2);
    result = "";
    for (let j = 0; j < even.length; j++) {
      result += even[j] + (j < odd.length ? odd[j] : "");
    }
  }
  return result;
}
