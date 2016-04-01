
console.log('loaded');

var panorama;

// create a panorama

function initMap() {
    panorama = new google.maps.StreetViewPanorama(document.getElementById('street-view'), {
      position: {lat: 37.869260, lng: -122.254811},
      pov: {heading: 165, pitch: 0},
      zoom: 1,
      addressControl: false,
      linksControl: false,
    });

//change the panorama when needed
    setTimeout(function() {
      panorama.setPosition({ lat: 51, lng: -0.1257 });
    }, 5000);
  }

