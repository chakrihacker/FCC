/* Factorialize a Number
Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers
less than or equal to n.
Factorials are often represented with the shorthand notation n!
For example: 5! = 1 * 2 * 3 * 4 * 5 = 120f
Remember to use RSAP if you get stuck. Try to pair program. Write your own code.
Here are some helpful links:
Arithmetic Operators
Code by Subramanya Chakravarthy
chanty.chakravarthy@gmail.com
http://www.freecodecamp.com/chakrihacker
*/

//Method 1 : Recursion
function factorialize(num) {
  if(num < 0)
    return -1;
  else if (num == 0) {
    return 1
  }
  else {
    return (num * factorialize(num - 1));
  }
}
console.log(factorialize(5));

//Method 2 : While Loop
function factorialize2(num) {
  var result = num;
  if (num == 0 || num == 1) {
    return 1;
  }
  while (num > 1) {
    num--;
    result *= num;
  }
  return result;
}
console.log(factorialize2(10));

//Method 3 : For Loop
function factorialize3(num) {
  for(var i = num - 1; i >=1; i-- ){
    num *= i;
  }
  return num
}
console.log(factorialize3(20));
