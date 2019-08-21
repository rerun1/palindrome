

$(document).ready(function(){
  $("form#wordInput").submit(function(event){
    event.preventDefault();

    var userWord = $("input#userWord").val();

    userWord.trim();

    console.log(userWord);

//     function reverse(str){
//   let reversed = "";
//   for (var i = str.length - 1; i >= 0; i--){
//     reversed += str[i];
//   }
//   return reversed;
// }


    for (var i = userWord.length - 1; i >= 0; i --) {
      var reverse = "";
      reverse += userWord[i];
      return reverse;
    }

    console.log(reverse);

  });
});
