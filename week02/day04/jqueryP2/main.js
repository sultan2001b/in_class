$(function(){
    // console.log("abc");
    $('#addHome').css('background',"green")
    $('.add-btn').removeClass('btn-danger').addClass('btn-add');
    $('.jumbotron').addClass('text-center');

    var $newLink = $( '<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com<a>' );
    var $body=$('body');

    $newLink.appendTo($body);
  $('#zillowLink').attr('href', 'https://www.kingdomvt.com');
// $('button').click(function(event){
//     console.log(event);
//     console.log(this);
//     $(this).remove()
// })
// $('button').on("click",function(event){
//     console.log(event);
//     console.log(this);
//     $(this).remove()
// })
// $('td').on("mouseover",function(event){
//     console.log(event);
//     console.log(this);
//     $(this).remove()
// })
// $('.btn-add').on('mouseenter',function(){
//     $(this).toggleClass('btn-add');
// })
// $('.btn-add').on('mouseleave',function(){
//     $(this).toggleClass('btn-add');
// })

$(".btn-danger").on('click',function(){
$(this).parent().parent().remove()
} )
// $(".btn-danger").parent().parent().remove()

})