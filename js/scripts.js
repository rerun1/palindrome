

$(document).ready(function(){
  $("form#wordInput").submit(function(event){
    event.preventDefault();

    var userWord = $("input#userWord").val();

    console.log(userWord);

  });
});
