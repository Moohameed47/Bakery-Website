$(window).scroll(function () {
    let x = $(window).scrollTop();
    if (x >= 720) {
        $(".nav").css('backgroundColor', "rgba(30,30,30,5)");
        $(".Scroll").fadeIn(500)
    } else {
        $(".nav").css('backgroundColor', "transparent");
        $(".Scroll").fadeOut(500)
    }
})

$('#btn-Up,#HOME').on('click', function () {
    $('html,body').animate({ scrollTop: '0px' }, 1000)
})
$('#ABOUT').on('click', function () {
    $('html,body').animate({ scrollTop: '720px' }, 1000)
})
$('#OUROFFER').on('click', function () {
    $('html,body').animate({ scrollTop: '1235px' }, 1000)
})
$('#GALLERY').on('click', function () {
    $('html,body').animate({ scrollTop: '1714px' }, 1000)
})
$('#CONTACT').on('click', function () {
    $('html,body').animate({ scrollTop: '2000px' }, 1000)
})

