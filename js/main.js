$(document).ready(function () {
	$('.dropdown').addClass('active');
	$('.item>a').hover(function () {
		$(this).next().addClass('open');
	}, function() {
		$(this).next().removeClass('open');
	});
});