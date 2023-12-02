/* 
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). 
Jaden is also known for some of his philosophy that he delivers via Twitter. 
When writing on Twitter, he is known for almost always capitalizing every word. 
For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.
Your task is to convert strings to how they would be written by Jaden Smith. 
The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:
Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real" 
*/

String.prototype.toJadenCase = function () {
    // Split the string into an array of words
    const wordsArray = this.split(" ");

    // Capitalize the first letter of each word
    const jadenCaseArray = wordsArray.map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );

    // Join the words back into a string
    return jadenCaseArray.join(" ");
}

// Example usage
const originalString = "this is a sample string";
const jadenCaseString = originalString.toJadenCase();

console.log(jadenCaseString);

