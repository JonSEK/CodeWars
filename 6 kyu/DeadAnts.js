/* 
An orderly trail of ants is marching across the park picnic area.
It looks something like this:
..ant..ant.ant...ant.ant..ant.ant....ant..ant.ant.ant...ant..
But suddenly there is a rumour that a dropped chicken sandwich has been spotted on the ground ahead. 
The ants surge forward! Oh No, it's an ant stampede!!
Some of the slower ants are trampled, and their poor little ant bodies are broken up into scattered bits.
The resulting carnage looks like this:
...ant...ant..nat.ant.t..ant...ant..ant..ant.anant..t
Can you find how many ants have died? 
*/

deadAntCount = function (ants) {
  let deadAnts = 0;
  let deadAntsArray = [];
  let deadAntsString = "";
  if (ants) {
    deadAntsArray = ants.replace(/ant/g, "").split("");
    deadAnts = Math.max(
      deadAntsArray.filter((ant) => ant === "a").length,
      deadAntsArray.filter((ant) => ant === "n").length,
      deadAntsArray.filter((ant) => ant === "t").length
    );
  }
  return deadAnts;
};
