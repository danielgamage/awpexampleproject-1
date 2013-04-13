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
        var mapOptions = {
			center: new google.maps.LatLng(42.43900,-76.493000),
			zoom: 15,
			panControl: false,
			zoomControl: false,
			streetViewControl: false,
			mapTypeControl: false,
			scrollwheel: false,
			zoomControl: true,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			styles: styles
        };
        var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);
}

	google.maps.event.addDomListener(window, 'load', initialize);

// Todo list: add the mapmarker icons

/*	var imageOne = 'img/mapcon1.png';
	var myLatLng = new google.maps.LatLng(42.43900,-76.493000);
	var beachMarker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		icon: imageOne
	});
*/
