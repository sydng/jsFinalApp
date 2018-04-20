//MAP SETUP
var map = L.map('map', {
  center: [30.173658, -95.489521],
  zoom: 13
});
var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

//CREATE MODAL
$(document).ready(function(){
    $('#myModal').modal('show');
    $('#sidebar').hide();

    $('#dropdown').change(function() {
        if ($('#dropdown').text() == "Landcover") {
          console.log("Selected");
        } else {
          console.log("Not selected");
        }
      });
});
