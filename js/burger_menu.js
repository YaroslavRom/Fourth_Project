$(document).ready(function (){
    $('.header_burger-menu').click(function (event){
        $('.header_burger-menu,.header_menu').toggleClass('menu_opened');

        $('body').toggleClass('lock');
    })
})