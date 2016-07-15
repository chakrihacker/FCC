/* Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Boolean Objects
Array.prototype.filter() */

// Thanks to wulkan.me for his approach
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var filtered = arr.filter(falsy);
  return filtered;
  function falsy(value){
    //console.log(Boolean(value));
    return Boolean(value);
  }
}

// Fcc Advanced Solution
function bouncer1(arr) {
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);
console.log(bouncer1([7, "ate", "", false, 9]));
