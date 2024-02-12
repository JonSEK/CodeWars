/* 
The Pell sequence is the sequence of integers defined by the initial values

P(0) = 0, P(1) = 1
and the recurrence relation

P(n) = 2 * P(n-1) + P(n-2)
The first few values of P(n) are

0, 1, 2, 5, 12, 29, 70, 169, 408, 985, 2378, 5741, 13860, 33461, 80782, 195025, 470832, ..

Your task is to return the nth Pell number 
*/

function pell(n) {
  if (n === 0) {
    return BigInt(0);
  } else if (n === 1) {
    return BigInt(1);
  } else {
    let pPrev = BigInt(0);
    let pCurr = BigInt(1);
    for (let i = 2; i <= n; i++) {
      let pNext = BigInt(2) * pCurr + pPrev;
      pPrev = pCurr;
      pCurr = pNext;
    }
    return pCurr;
  }
}
