/* 
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0] 
*/

function sortArray(array) {
  let odd = array.filter((num) => num % 2 !== 0).sort((a, b) => a - b);
  let even = array.filter((num) => num % 2 === 0);
  let result = [];
  array.forEach((num) => {
    if (num % 2 !== 0) {
      result.push(odd[0]);
      odd.shift();
    } else {
      result.push(even[0]);
      even.shift();
    }
  });
  return result;
}