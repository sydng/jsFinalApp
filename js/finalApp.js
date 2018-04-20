//MAP SETUP
var map = L.map('map', {
  center: [30.173658, -95.489521],
  zoom: 12
});
var Stamen_TonerLite = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
	subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

//CREATE MODAL
$(document).ready(function(){
  $('#sidebar').hide();
  $('#about').hide();
  $('#myModal').modal('show');

  $('#landcover').on('click', function() {
    $('#sidebar').show();
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

  $('#closeIcon2').on('click', function() {
    $('#sidebar').hide();
  });
});
