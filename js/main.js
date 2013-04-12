$(document).ready(function () {
	$('.dropdown').addClass('active');
	$('.item').hover(function () {
		$(this).find('div').addClass('open');
	}, function() {
		$(this).find('div').removeClass('open');
	});
});