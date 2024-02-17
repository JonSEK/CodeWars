/* 
You are given two strings (st1, st2) as inputs. Your task is to return a string containing the numbers in st2 which are not in str1. 
Make sure the numbers are returned in ascending order. All inputs will be a string of numbers.

Here are some examples:
findAdded('4455446', '447555446666'); // '56667'
findAdded('44554466', '447554466'); // '7'
findAdded('9876521', '9876543211'); // '134'
findAdded('678', '876'); // ''
findAdded('678', '6'); // '' 
*/

function findAdded(st1, st2) {
  let arr1 = st1.split("");
  let arr2 = st2.split("");
  let result = [];
  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      result.push(arr2[i]);
    } else {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  return result.sort().join("");
}
