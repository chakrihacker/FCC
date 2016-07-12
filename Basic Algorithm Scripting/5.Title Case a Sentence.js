/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.split()
*/
//My method of approach using map function
function titleCase(str) {
  var splitstr = str.split(' ');
  //console.log(splitstr);
  lowercasearr = splitstr.map(function(lowercase){
    return lowercase.toLowerCase();
  });
  //console.log(lowercasearr);
  capitalizearr = lowercasearr.map(function(capitalize){
    return capitalize[0].toUpperCase() + capitalize.slice(1);
  });
  //console.log(capitalizearr);
  capitalizesentence = capitalizearr.join(' ');
  //console.log(capitalizesentence);
  return capitalizesentence;
}

console.log(titleCase("I'm a Little Tea Pot"));

//Fcc Basic Method
String.prototype.replaceAt = function(index, character){
  return this.substr(0, index) + character + this.substr(index + character.length);
};

function titleCase2(str) {
  var newTitle = str.split(' ');
  var updatedTitle = [];
  for (var st in newTitle){
    updatedTitle[st] = newTitle[st].toLowerCase().replaceAt(0, newTitle[st].charAt(0).toUpperCase());
  }
  return updatedTitle.join(' ');
}

console.log(titleCase2("I'm a Little Tea Pot"));
// Intermediate code from fcc
function titleCase3(str) {
  var convertToArray = str.split(' ');
  var result = convertToArray.map(function(val){
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(' ');
}

console.log(titleCase3("I'm a Little Tea Pot"));

//Advanced code from Fcc
function titleCase4(str) {
  return str.toLowerCase().replace(/(|^)[a-z]/g, (L) => L.toUpperCase() );
}

console.log(titleCase4("I'm a Little Tea Pot"));
