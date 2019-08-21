var userWord = "";
var word = "";
var reverseUserWord = "";

var wordPrep = function(userWord){
  word = userWord.trim().toLowerCase();
  reverseUserWord = word.split("").reverse().join("");
};



$(document).ready(function(){

  $("form#wordInput").submit(function(event){
    event.preventDefault();

    $("p#palindromeSentence").empty();

    userWord = $("input#userWord").val();

    wordPrep(userWord);

    if (reverseUserWord === word) {
      return $("p#palindromeSentence").text(userWord + " is a palindrome!");
    } else {
      return $("p#palindromeSentence").text(userWord + " is not a palindrome.");
    }

  });

});

// for (var i = word.length - 1; i >= 0; i --) {
//   reverseUserWord += word[i];
// }
//
// var recursionReverse = function(string) {
//   if (string === "") { // terminal case
//     return string;
//   } else { // block to execute
//     reverseUserWord = recursionReverse(string.substr(1)) + string[0];
//     return reverseUserWord;
//   }
// };
// recursionReverse(word);

// reverseUserWord = word.split("").reverse().join("");
