$(function(){

    var $navMenu = $('.js-mobile-menu');
    $navMenu.click(function(){
       $(this).toggleClass('nav-menu-on');
       $(this).next('.nav-lst').toggleClass('show');
    });


})