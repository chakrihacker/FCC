/* Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.
We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
Remember to use Read-Search-Ask if you get stuck. Write your own code.
Here are some helpful links:
String.prototype.replace()
String.prototype.toLowerCase()

Code by Subramanya Chakravarthy
chanty.chakravarthy@gmail.com
http://www.freecodecamp.com/chakrihacker */

function palindrome(str) {
  // Remove non alphanumeric characters
  var nonalphanumstr = str.replace(/[^a-zA-Z0-9]/gi,'');
  //Another regexp got from stackoverflow and some tinkering
  // var nonalphanumstr = str.replace(/[\W_]/gi, '');
  // convert to lowercase
  var lowercasestr = nonalphanumstr.toLowerCase();
  //reverse the string
  var revstr = lowercasestr.split('').reverse().join('');
  //compare revstr and lowercasestr
  // I can use if else but using terinary decreases lines and learning syntax
  var answer = (lowercasestr == revstr) ? true:false;
  return answer;
}

console.log(palindrome('_eye'));

// Method 2 : using for loop
function palindrome2(str) {
  // Good luck!
  var nonalphanum = str.replace(/[\W_]/gi,'');
  var lowercasestr = nonalphanum.toLowerCase();
  var midlength = (lowercasestr.length)/2;
  for (var i = 0; i < midlength; i++){
    if(lowercasestr[i] !== lowercasestr[lowercasestr.length-i-1]){
      return false;
    }
  }
  return true;
}
console.log(palindrome2("almostomla"));
console.log(palindrome2('_eye'));
