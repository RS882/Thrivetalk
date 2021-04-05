
$(document).ready(function () {
	$('.header__burger').click(function (event) {// при нажатии на .header__burger
		$('.header__burger, .header__row, .header__logo, .header__contact-box').toggleClass('active'); // добавляется класс - при повторном- пропадает
		$('body').toggleClass('lock');
	});
});