$(function(){

    var $navMenu = $('.js-mobile-menu');
    $navMenu.click(function(){
       $(this).toggleClass('nav-menu-on');
       $(this).next('.nav-lst').toggleClass('show');
    });


    var $tabMenu = $('.sidebar a');
    $tabMenu.click(function(){
       $(this).addClass('on').siblings().removeClass('on');
        var tabIndex = $tabMenu.index(this);
        $('.tab-con > section').eq(tabIndex).addClass('active').siblings().removeClass('active');
    });

})