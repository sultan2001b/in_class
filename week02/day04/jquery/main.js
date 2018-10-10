 $(document).ready(function(){
     console.log("JQ connected");

    //  var $newBox = $('<div/>').addClass("box").text("i am a cat");
     var $newBox = $('<div/>').addClass("box").html("i am a cat");
     var $newNewBox = $("<div class='box'>i am a Dog</div>");
    //  $("body").append($newBox);
    $(".container").append($newNewBox);
    $(".container").append($newBox);

 })