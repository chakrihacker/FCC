/* One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.prototype.charCodeAt()
String.fromCharCode() */

function rot13(str) { // LBH QVQ VG!

    var result = "";
    var pattern = /\W/;

    for (var i = 0; i < str.length; i++) {
      var temp = 0;
      console.log(pattern.test(str[i]));
      if (pattern.test(str[i])) {
        result = result + str[i];
      }else{
        if (str.charCodeAt(i) < 78) {
            console.log(str.charCodeAt(i) + 13);
            temp = str.charCodeAt(i)+13;
            result = result + String.fromCharCode(temp);
        } else {
            console.log(str.charCodeAt(i) - 13);
            temp = str.charCodeAt(i) - 13;
            result = result + String.fromCharCode(temp);
        }
      }
    }
    console.log(result);
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
//rot13("ABCD")
//rot13(" ?a")
