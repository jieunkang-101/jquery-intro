$(document).ready(function() {

  var sentence = prompt("Please enter a sentence.");

  //Will capitalize the first and last letter of a user's input.
  var capitalize = function(sentence) {
  	first = sentence.replace(sentence.charAt(0), sentence.charAt(0).toUpperCase());
    lastChar = sentence.length - 1;
    last = first.replace(first.charAt(lastChar), first.charAt(lastChar).toUpperCase());
    
    return last
  }
 