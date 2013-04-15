$(document).ready(function () {
	$('.dropdown').addClass('active');
	$('.item').hover(function () {
		$(this).find('div').addClass('open');
	}, function() {
		$(this).find('div').removeClass('open');
	});
});
	// Mappy

var styles = [
  {
	"featureType": "water",
	"elementType": "geometry.fill",
	"stylers": [
	  { "color": "#00aab2" }
	]
  },{
	"featureType": "poi",
	"elementType": "geometry.stroke",
	"stylers": [
	  { "color": "#d8d8d8" }
	]
  },{
	"featureType": "landscape",
	"elementType": "geometry.fill",
	"stylers": [
	  { "color": "#f7f4e7" }
	]
  },{
	"featureType": "road",
	"elementType": "geometry.fill",
	"stylers": [
	  { "color": "#ffffff" }
	]
  },{
	"elementType": "labels.text.stroke",
	"stylers": [
	  { "color": "#ffffff" }
	]
  }
];

function initialize() {
	var latLng = new google.maps.LatLng(42.43990,-76.493900),
		mapOptions = {
				center: latLng,
				zoom: 15,
				panControl: false,
				zoomControl: false,
				streetViewControl: false,
				mapTypeControl: false,
				scrollwheel: false,
				zoomControl: true,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				styles: styles
			},

		map = new google.maps.Map(document.getElementById("map"), mapOptions),

		image1 = 'img/mapcon1.png',
		marker1LatLng = new google.maps.LatLng(42.4412,-76.4975),
		marker1 = new google.maps.Marker({
			position: marker1LatLng,
			map: map,
			icon: image1
		});

		image2 = 'img/mapcon2.png',
		marker2LatLng = new google.maps.LatLng(42.4387,-76.493),
		marker2 = new google.maps.Marker({
			position: marker2LatLng,
			map: map,
			icon: image2
		});
}
	google.maps.event.addDomListener(window, 'load', initialize);
