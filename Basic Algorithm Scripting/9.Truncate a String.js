/* Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.slice() */

function truncateString(str, num) {
  // Clear out that junk in your trunk
  if(num >= str.length){
    return str;
  }else if (num < 3) {
    var result = str.slice(0, num) + "...";
    return result;
  }else{
    var result = str.slice(0, num - 3) + "...";
    return result;
  }
}

// Fcc Basic solution
function truncateString2(str, num) {
  if (str.length > num && num > 3) {
    return str.slice(0, (num - 3)) + "...";
  }else if (str.length > num && num < 3) {
    return str.slice(0, num) + "...";
  }else {
    return str;
  }
}

// Fcc advanced solution
function truncateString3(str, num) {
  if (str.length <= num) {
    return str;
  }else {
    return str.slice(0, num > 3 ? num - 3 : num) + '...';
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
console.log(truncateString("A-", 1));
console.log(truncateString("Absolutely Longer", 2));
