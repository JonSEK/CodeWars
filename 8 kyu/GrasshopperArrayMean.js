//Find the mean (average) of a list of numbers in an array.

var findAverage = function (nums) {
    var total = 0
    nums.forEach((element) => {
        total += element
    })
    return total / nums.length
}