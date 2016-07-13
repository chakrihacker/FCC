/* Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Global String Object */

// My approach looks loke legacycode
function repeatStringNumTimes(str, num) {
    // repeat after me
    var result = "";
    if(num < 0){
      return "";
    }else {
      while (num != 0) {
        result += str;
        num--;
      }
      return result;
    }
}

// Fcc Basic approach
function repeatStringNumTimes2(str, num) {
  var accumulatedStr = '';
  while (num > 0) {
    accumulatedStr += str;
    num--;
  }
  return accumulatedStr;
}

// Fcc Intermediate code Solution
function repeatStringNumTimes3(str, num) {
  if (num < 0) {
    return "";
  }else if (num == 1) {
    return str;
  }else {
    return str + repeatStringNumTimes3(str, num-1);
  }
}

//Fcc Advanced Code Solution
function repeatStringNumTimes4(str, num) {
  return num > 0 ? str.repeat(num) : "";
}

console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes2("abc", 3));
console.log(repeatStringNumTimes3("abc", 3));
console.log(repeatStringNumTimes4("abc", 3));
