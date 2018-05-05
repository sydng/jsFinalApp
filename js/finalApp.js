//MAP SETUP
mapboxgl.accessToken = 'pk.eyJ1Ijoic3lkbmciLCJhIjoiY2pmY3JuM2x3M3poYjJ3bzFwZmV4ZHdwdCJ9.H7Kk8jKeATVVDR9qaVxU2Q';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v9',
    zoom: 11,
    center: [-95.523752,30.177220]
});

map.addControl(new mapboxgl.NavigationControl());

//GEOJSON URLs

var phase1 = "https://raw.githubusercontent.com/sydng/Datasets/master/phase1_geojson.geojson";
var phase2 = "https://raw.githubusercontent.com/sydng/Datasets/master/phase2_geojson.geojson";
var phase3 = "https://raw.githubusercontent.com/sydng/Datasets/master/phase3_geojson.geojson";

//CREATE WEBPAGE
$(document).ready(function(){
  $.ajax(promise).done(function(data) {
    var parsedData = JSON.parse(data);
    phases = L.geoJson(parsedData, {
      color: "lightgray",
      filter: majorArterials
    }).bindPopup(function(layer) {
      return layer.feature.properties.hundred_block_score.toString();
    });

    $('#sidebar').hide();
    $('#about').hide();
    $('#myModal').modal('show');

    $('#exploreButton').on('click', function() {
      $('#sidebar').show();
    });

    $('#inundBox').click(function() {
      if($('#inundBox').prop("checked")) {
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
      } else {
        map.removeLayer("woodlands");
      }
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
});
