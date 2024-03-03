/* 
Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. 

For example:
  12 ==> 21
 513 ==> 531
2017 ==> 2071

If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):
  9 ==> -1
111 ==> -1
531 ==> -1 
*/

function nextBigger(n) {
  let arr = n.toString().split("");
  let i = arr.length - 1;
  while (i > 0 && arr[i - 1] >= arr[i]) {
    i--;
  }
  if (i <= 0) {
    return -1;
  }
  let j = arr.length - 1;
  while (arr[j] <= arr[i - 1]) {
    j--;
  }
  let temp = arr[i - 1];
  arr[i - 1] = arr[j];
  arr[j] = temp;
  j = arr.length - 1;
  while (i < j) {
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  let next = parseInt(arr.join(""));
  return next <= n ? -1 : next;
}
