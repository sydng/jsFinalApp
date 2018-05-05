//MAP SETUP
mapboxgl.accessToken = 'pk.eyJ1Ijoic3lkbmciLCJhIjoiY2pmY3JuM2x3M3poYjJ3bzFwZmV4ZHdwdCJ9.H7Kk8jKeATVVDR9qaVxU2Q';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v9',
    zoom: 11,
    center: [-95.523752,30.177220]
});

map.addControl(new mapboxgl.NavigationControl());

//CREATE WEBPAGE
$(document).ready(function(){
  $('#sidebar').hide();
  $('#about').hide();
  $('#myModal').modal('show');

  $('#exploreButton').on('click', function() {
    $('#sidebar').show();
  });

  $('#inundBox').click(function() {
    if($('#inundBox').prop("disabled", false)) {
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
              3, 1
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
    } else { }
  });

  $('#aboutButton').on('click', function() {
    $('#myModal').modal('show');
    $('#map').css('top', '75px');
  });

  $('#resourceButton').on('click', function() {
    $('#map').css('top', 'auto');
  });

  $('#closeIcon').on('click', function() {
    $('#sidebar').hide();
  });
});
