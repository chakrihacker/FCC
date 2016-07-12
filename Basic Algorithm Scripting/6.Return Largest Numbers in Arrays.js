/* Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Comparison Operators */

function largestOfFour(arr) {
    // You can do this!
    var result = [];
    for (var i in arr) {
        var largestNum = 0;
        for (var j in arr[i]) {
            if (arr[i][j] > largestNum) {
                largestNum = arr[i][j];
            }
        }
        result.push(largestNum);
        //console.log(result);
    }
    return result;
}
// Fcc Basic Method
function largestOfFour2(arr) {
  var results = [];
  for (var n = 0; n < arr.length; n++) {
    var largestNumber = 0;
    for (var sb = 0; sb < arr[n].length; sb++) {
      if (arr[n][sb] > largestNumber) {
        largestNumber = arr[n][sb];
      }
    }
    results[n] = largestNumber;
  }
  return results;
}

// Fcc intermediate Approach

function largestOfFour3(arr) {
  return arr.map(function(group){
    return group.reduce(function(prev, current){
      return (current > prev) ? current : prev;
    }, 0);
  });
}

console.log(largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]));

console.log(largestOfFour2([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour3([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
