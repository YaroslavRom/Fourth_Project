$(document).ready(function () {
    $('.slider-number-one').slick({
        arrows: false,
        dots: false,
        infinite: false,
        // autoplaySpeed: 300,
        // easing:'ease',
        // speed:300,
        slidesToShow: 3,
        draggable:true,
        slidesToScroll:1,
        // slidesToScroll:0,
            responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: false,
                dots: true,
                draggable:true,

            }
        },
                {
                    breakpoint: 851,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: true,
                        draggable:true,

                    }
                }

    ]
    })

});

$(document).ready(function () {
    $('.second-slider').slick({
        arrows: false,
        dots: true,
        infinite: false,
        // autoplaySpeed: 300,
        // easing:'ease',
        // speed:300,
        slidesToShow: 1,
        draggable:true,
        slidesToScroll:1,
        // slidesToScroll:0,
    })

});





//reference :)
//
// $('.slider-number-one').slick({
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 3,
//                 infinite: true,
//                 dots: true,
//             }
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 2
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         }
//     ]
// });