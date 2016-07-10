/* Reverse a String

Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.
Remember to use RSAP if you get stuck. Try to pair program. Write your own code.
Here are some helpful links:
Global String Object String.split() Array.reverse() Array.join()
Code by Subramanya Chakravarthy
chanty.chakravarthy@gmail.com
http://www.freecodecamp.com/chakrihacker
*/

//Method 1
function reverseString(str) {
  var revstr = str.split('').reverse().join('');
  return revstr
}

//Method 2
revstr2 = ""
function reverseString2(str) {
  for(var i = str.length - 1; i >=0; i--){
    revstr2 += str[i];
  }
  return revstr2
}

console.log(reverseString("hello"));
console.log(reverseString2("chakri"));
