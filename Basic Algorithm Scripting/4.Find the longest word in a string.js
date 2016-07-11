/*
Return the length of the longest word in the provided sentence.
Your response should be a number.
Remember to use Read-Search-Ask if you get stuck. Write your own code.
Here are some helpful links:
String.prototype.split()
String.length
*/

function findLongestWord(str) {
  wordarray = str.split(' ');
  longestwordlength = 0;
  for(var i = 0; i < wordarray.length; i++){
    if(wordarray[i].length > longestwordlength){
      longestwordlength = wordarray[i].length;
    }
  }
  return longestwordlength;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

//Method 2 using sort function
function findLongestWord2(str) {
  var longestWord = str.split(" ").sort(function (a, b) {
    return b.length - a.length;
  });
  return longestWord[0].length
}

console.log(findLongestWord2("The quick brown fox jumped over the lazy dog"));

//Method 3 : Using reduce function
function findLongestWord3(str) {
  var longestWord = str.split(' ').reduce(function(longest, currentWord){
    return currentWord.length > longest.length ? currentWord : longest;
  },"");
  return longestWord.length;
}

console.log(findLongestWord3('Google do a barrel roll'));
