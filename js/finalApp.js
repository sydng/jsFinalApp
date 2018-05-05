//MAP SETUP
/*var map = L.map('map', {
  center: [30.173658, -95.489521],
  zoom: 12
});
var Stamen_TonerLite = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
	subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);*/

mapboxgl.accessToken = 'pk.eyJ1Ijoic3lkbmciLCJhIjoiY2pmY3JuM2x3M3poYjJ3bzFwZmV4ZHdwdCJ9.H7Kk8jKeATVVDR9qaVxU2Q';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v9',
    zoom: 11,
    center: [-95.523752,30.177220]
});

map.addControl(new mapboxgl.NavigationControl());

//CREATE MODAL
$(document).ready(function(){
  $('#sidebar').hide();
  $('#about').hide();
  $('#myModal').modal('show');

  $('#exploreButton').on('click', function() {
    $('#sidebar').show();
    map.addLayer({
        "id": "woodlands",
        "type": "heatmap",
        "source": {
          "type": "vector",
          "tiles": ["https://s3.us-east-2.amazonaws.com/jswoods/{z}/{x}/{y}.pbf"],
          "minzoom": 0,
          "maxzoom": 19
        },
        "source-layer": "WoodlandsPoints",
        "paint": {
          "heatmap-weight": [
              "interpolate",
              ["linear"],
              ["get", "Inundation"],
              0, 0,
              9, 1
          ],
          "heatmap-intensity": [
              "interpolate",
                ["linear"],
                ["zoom"],
                0, 1,
                3, 3
          ],
          "heatmap-color": [
              "interpolate",
              ["linear"],
              ["heatmap-density"],
              0, "rgba(33,102,172,0)",
              0.2, "rgb(103,169,207)",
              0.4, "rgb(209,229,240)",
              0.6, "rgb(253,219,199)",
              0.8, "rgb(239,138,98)",
              1, "rgb(178,24,43)"
          ],
          'heatmap-opacity': 0.8
        }
      });
  });

  $('#aboutButton').on('click', function() {
    $('#about').show();
    $('#map').css('top', '75px');
  });

  $('#resourceButton').on('click', function() {
    $('#map').css('top', 'auto');
  });

  $('#closeIcon').on('click', function() {
    $('#about').hide();
  });

  $('#closeIcon').on('click', function() {
    $('#sidebar').hide();
  });
});
