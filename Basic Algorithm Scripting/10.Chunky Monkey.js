/* Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.prototype.push()
Array.prototype.slice() */

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArr = [];
  for(var i = 0; i < arr.length; i += size ){
    var temp = arr.slice(i, i+size);
    console.log(i);
    newArr.push(temp);
  }
  return newArr;
}

// Fcc Basic Solution
function chunkArrayInGroups2(arr, size) {
  var temp = [];
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (i % size !== size - 1) {
      temp.push(arr[i]);
    }else {
      temp.push(arr[i]);
      result.push(temp);
      temp = [];
    }
  }
  if (temp.length !== 0) {
    result.push(temp);
  }
  return result;
}

// Fcc Intermediate solution
function chunkArrayInGroups3(arr, size) {
  arr = arr.slice();
  arr2 = [];
  for (var i= 0; i< arr.length; i+= size) {
    arr2.push(arr.slice(0, size));
    arr = arr.slice(size);
  }
  return arr2;
}

// Fcc Advanced solution almost similar to mine
function chunkArrayInGroups4(arr, size) {
  var newArr = [];
  var i = 0;
  while (i < arr.length) {
    newArr.push(arr.slice(i, i+size));
    i += size;
  }
  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
