/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
1 -->  1
2 --> 3 + 5 = 8
*/

function rowSumOddNumbers(n) {
    /*
    let total = 0;
    for (i = 1; i <= n * 2 - 1; i += 2) {
        total += n * (n - 1) + i;
    }
    return total
    */

    return n ** 3;
}
