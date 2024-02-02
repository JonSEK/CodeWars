/* 
How many bees are in the beehive?
bees can be facing UP, DOWN, LEFT, or RIGHT
bees can share parts of other bees

Ex1
bee.bee     
.e..e..
.b..eeb
Answer: 5

Ex2
bee.bee     
e.e.e.e
eeb.eeb
Answer: 8

Notes
The hive may be empty or null/None/nil/...
Python: the hive is passed as a list of lists (not a list of strings) 
*/

howManyBees = function (hive) {
  if (!hive) return 0;
  let count = 0;
  for (let i = 0; i < hive.length; i++) {
    for (let j = 0; j < hive[i].length; j++) {
      if (hive[i][j] === "b") {
        if (hive[i][j + 1] === "e" && hive[i][j + 2] === "e") count++;
        if (hive[i][j - 1] === "e" && hive[i][j - 2] === "e") count++;
        if (hive[i + 1] && hive[i + 1][j] === "e" && hive[i + 2] && hive[i + 2][j] === "e") count++;
        if (hive[i - 1] && hive[i - 1][j] === "e" && hive[i - 2] && hive[i - 2][j] === "e") count++;
      }
    }
  }
  return count;
};
