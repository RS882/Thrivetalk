
$(document).ready(function () {
	$('.header__burger').click(function (event) {// при нажатии на .header__burger
		$('.header__burger, .header__row, .header__logo, .header__contact-box').toggleClass('active'); // добавляется класс - при повторном- пропадает
		$('body').toggleClass('lock');
	});
	$('.menu__link, .header__contact').click(function (event) {// при нажатии на .header__burger
		$('.header__burger, .header__row, .header__logo, .header__contact-box').removeClass('active'); // добавляется класс - при повторном- пропадает
		$('body').removeClass('lock');
	});


});