$(document).ready(function () {
	$('.hamburger').click(function() {
		$('header .hamburger').toggleClass('is-active');
		$('header .menu').toggleClass('is-active');
		return false;
	});

	var altura = $('header').offset().top;
	$(window).scroll(function () {
		if ($(window).scrollTop() > altura) {
			$('header').addClass('fixed');
		} else {
			$('header').removeClass('fixed');
		}
	});

	$('#slider').slick({
		dots: false,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
  		autoplaySpeed: 2000,
		slidesToShow: 1,
		adaptiveHeight: true,
		responsive: [{
				breakpoint: 768,
				settings: {
					dots: false,
					arrows: false,
					slidesToShow: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					dots: false,
					arrows: false,
					slidesToShow: 1
				}
			}
		]
	});
});