$(document).ready(function (){
    $('.header_burger-menu').click(function (event){
        $('.header_menu').toggleClass('menu_opened');

        // $('body').toggleClass('lock');
    })
})


$(document).ready(function (){
    $('.slider-number-one').slick({
        infinite: false,
        easing:'ease',
        responsive: [
            {
                breakpoint: 1220,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll:1,
                    dots: true
                }
            }
        ]

    });
});