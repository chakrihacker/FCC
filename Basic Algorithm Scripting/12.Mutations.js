/* Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.indexOf() */

// My Approach took 1.5 day but worth taking it. Sometimes we don't read the problem correctly
// think what we are doing is right. when the answer is wrong try to read problem again and
// Don't forget to take rest and come back to it and try in new way.
function mutation(arr) {
  var result = 0;

  lowercasearr = arr.map(function(lowercase){
    return lowercase.toLowerCase();
  });
  console.log(lowercasearr);
  for(var i = 0; i < lowercasearr[1].length; i++){
    result = lowercasearr[0].indexOf(lowercasearr[1][i]);
    if (result < 0) {
      return false;
    }
  }
  return true;
}

//Fcc Approach Basic Solution

function mutation1(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (var i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) {
      return false;
    }
  }
  return true;
}

// Fcc intermediate Approach
function mutation2(arr) {
  return arr[1].toLowerCase().split('').every(function(letter){
    return arr[0].toLowerCase().indexOf(letter) != -1;
  });
}

console.log(mutation(["hello", "Hello"]));
console.log(mutation1(["hello", "Hello"]));
console.log(mutation2(["hello", "Hello"]));
