/* Return the remaining elements of an array after chopping off n elements from the head.

The head means the beginning of the array, or the zeroth index.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.prototype.slice()
Array.prototype.splice() */

//MY Approach
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  return arr.slice(howMany, arr.length);
}

// Fcc Basic Solution
function slasher2(arr, howMany) {
  arr.splice(0, howMany);
  return arr;
}

// Fcc Intermediate solution
function slasher3(arr, howMany) {
  return arr.slice(howMany);
}

console.log(slasher([1, 2, 3], 2));
console.log(slasher2([1, 2, 3], 2));
console.log(slasher3([1, 2, 3], 2));
