$(function()
 {
    "use strict"
});

$(".navbar-nav li a[href^='#']").on('click',function(e){
    e.preventDefault();
    var hash = this.hash;
    $('html,body').animate({
        scrollTop:$(this.hash).offset().top
    },900,function(){
       window.location.hash=hash; 
    });
});
