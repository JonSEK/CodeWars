/* 
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:
'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb' 
*/

function switcheroo(x) {
  return str
    .split("")
    .map((char) => {
      switch (char) {
        case "a":
          return "b";
        case "b":
          return "a";
        default:
          return char;
      }
    })
    .join("");
}
