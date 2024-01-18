/* Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:
[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:
[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
] 
*/

function towerBuilder(nFloors) {
  let tower = [];
  let floor = "";
  let space = "";
  let star = "";
  for (let i = 1; i <= nFloors; i++) {
    space = " ".repeat(nFloors - i);
    star = "*".repeat(i * 2 - 1);
    floor = space + star + space;
    tower.push(floor);
  }
  return tower;
}
