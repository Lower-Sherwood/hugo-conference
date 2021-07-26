function initialize() {
  initMap();
  //initAutocomplete();
}

function initMap() {
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 16, 
    center: {lat: 37.883680586603575, lng: -78.50607403138893}
  });
  var geocoder = new google.maps.Geocoder();

  geocodeAddress(geocoder, map);
}

function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('map-canvas').getAttribute("data-address");
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === 'OK') {
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
    } else {
      console.log("Geocode was not successful for the following reason: " + status);
    }
  });
}
