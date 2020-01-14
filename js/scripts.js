$(document).ready(function() {

  var sentence = prompt("Please enter a sentence.");

  //Will capitalize the first and last letter of a user's input.
  var capitalize = function(sentence) {
  	first = sentence.replace(sentence.charAt(0), sentence.charAt(0).toUpperCase());
    lastChar = sentence.length - 1;
    last = first.replace(first.charAt(lastChar), first.charAt(lastChar).toUpperCase());
    
    return last
  }

  //Switch first and last letters of sentence.
  var something = function(sentence) {
    var first = sentence.charAt(0);
    var lastLen = sentence.length - 1;
    var last = sentence.charAt(lastLen);
    var firstSwitch = sentence.replace((sentence.charAt(lastLen)), first);
    var secondSwitch = firstSwitch.replace(firstSwitch.charAt(0), last);
    return secondSwitch;
  }

  var somethingElse = function(sentence) {
    var firstcap = capitalize(sentence);
    var secondFunc = something(firstcap);
    var firstChar = secondFunc.charAt(0);
    var lastLength = secondFunc.length -1;
    var secondChar = secondFunc.charAt(lastLength);
    var result = firstChar + secondChar;
    var finalResult = sentence + result;
    return finalResult;
  }

  var counting = function(Sentence) {
    var thirdFunc = somethingElse(sentence);
    var senLen = thirdFunc.length / 2;
    var index = thirdFunc.charAt(senLen);
    var concat = index + thirdFunc;
    return concat;
  }

  var reverse = function(sentence) {
    i = 0;
    var newSent;
    while (i <= sentence.length) {
      newSent = newSent + sentence.charAt(i);
      i++;
    }
    
    return newSent;
  }

  alert(reverse(sentence));

});