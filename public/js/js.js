$("#menutoggle").click(function () {
    $("#menu").slideToggle("slow", function () {
        // Animation complete.
    });
});

// onloads

$('#div').addClass('animated slideInDown');

$('#div').removeClass('wow fadeInUp');

$('#div').hide();

$('#div').show();

// insert before so we can embed formstack forms easily
var div = document.getElementById( 'field31108691' );
div.insertAdjacentHTML( 'beforeBegin', '<img src="img1/nombre.png"><br>' );


// onclicks

$('#div').click(function () {
    $('#div').attr('checked', false);
    $('#div').css('background-image', 'url(../img/img.png)');
});

// slickslider
$('.slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000
});

// animated buttons

$("#div").mouseover(function () {
    $("#div").removeClass('class');
    $("#div").addClass('animated tada');
});
$("#div").mouseout(function () {
    $("#div").removeClass('class');
    $("#div").removeClass('animated tada ');
});

// optionals

$('#div').click(function () {
    $('.div')[this.checked ? "show" : "hide"]();
    $("#div").addClass('class');
});


// links

$('#fb').click(function () {
    window.open(
        'https://www.url.com/',
        '_blank'
    );
});

// animation revealer

new WOW().init();