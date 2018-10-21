$(document).ready(function(){
    // console.log("hi");
    var $box = $('.pretty-box');
    $('#button1').click(function(){

        // $box.show("slow");
        // $box.fadeIn(1000);
        $box.slideUp(1000);

    })
    $('#button2').click(function(){
        // debugger;
        // $box.hide("fast");
        // $box.fadeOut(1234);
        $box.slideToggle();

    })
$('#button3').click(function(){
    // $box.toggle(1000,myFunction);
    $box.fadeToggle(3000);

})
function myFunction(){
    console.log("hi");
}
$('#button4').click(function(){
    // $box.toggle(1000,myFunction);
    // $box.fadeTo(2000,.5);
    

})
$('#button5').click(function(){
    // $box.toggle(1000,myFunction);
    // $box.fadeTo(2000,.5);
    $box.animate({"margin-left":"200px",opacity:'0.5','height':"+=400px",'width':"+=200px"},5000,changeBackground)
function changeBackground(){
    $('body').css("background","red");
}
})
})
// jQuery(document).ready(function(){

// })

// $.fn ==> to show all function fot jQuery

