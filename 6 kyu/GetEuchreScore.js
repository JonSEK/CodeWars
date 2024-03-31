/* 
You are playing euchre and you want to know the new score after finishing a hand. 
There are two teams and each hand consists of 5 tricks. 
The team who wins the majority of the tricks will win points but the number of points varies. 
To determine the number of points, you must know which team called trump, how many tricks each team won, and if anyone went alone. 
Scoring is as follows:

For the team that called trump:
if they win 2 or less tricks -> other team wins 2 points
if they win 3 or 4 tricks -> 1 point
if they don't go alone and win 5 tricks -> 2 points
if they go alone and win 5 tricks -> 4 points
Only the team who called trump can go alone and you will notice that it only increases your points if you win all 5 tricks.
Your job is to create a method to calculate the new score. When reading the arguments, team 1 is represented by 1 and team 2 is represented by 2. 
All scores will be stored with this order: { team1, team2 }. 
*/

function updateScore(currentScore, calledTrump, alone, tricks) {
  const [team1, team2] = currentScore;
  const team1Tricks = tricks.filter(trick => trick === 1).length;
  const team2Tricks = tricks.filter(trick => trick === 2).length;

  if (calledTrump === 1) {
    if (alone && team1Tricks === 5) return [team1 + 4, team2];
    if (team1Tricks < 3) return [team1, team2 + 2];
    if (team1Tricks === 5) return [team1 + 2, team2];
    return [team1 + 1, team2];
  }

  if (calledTrump === 2) {
    if (alone && team2Tricks === 5) return [team1, team2 + 4];
    if (team2Tricks < 3) return [team1 + 2, team2];
    if (team2Tricks === 5) return [team1, team2 + 2];
    return [team1, team2 + 1];
  }
}
