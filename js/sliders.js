$(document).ready(function () {
    $('.slider-number-one').slick({
        infinite: false,
        autoplay: false,
        arrows:false,
        dots: true,
        speed: 1000,
        easing:'ease',
        waitForAnimate: false,
        slidesToShow: 1,
        slidesToScroll:1,

    });
});


// $(document).ready(function (){
// $('.slider-number-one').slick({
//     dots: true,
//     infinite: false,
//     speed: 300,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplaySpeed: 100,
//     swipe: true,
//     responsive: [
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 dots: true,
//                 swipe:true,
//
//             }
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 dots: true,
//                 swipe:true,
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 dots: true,
//                 swipe:true,
//             }
//         }
//     ]
// });
// });