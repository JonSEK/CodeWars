/* 
You will be given a number and you will need to return it as a string in Expanded Form. For example:
expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4' 
*/

function expandedForm(num) {
  let numString = num.toString();
  let expandedForm = "";
  for (let i = 0; i < numString.length; i++) {
    if (numString[i] !== "0") {
      expandedForm += numString[i] + "0".repeat(numString.length - i - 1) + " + ";
    }
  }
  return expandedForm.slice(0, -3);
}