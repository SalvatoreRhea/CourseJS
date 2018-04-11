$(document).ready(function() {
 $('.main_btna').on('click', function() {
  $('.overlay').fadeIn();
 });

 $('.main_btna').on('click', function() {
  $('.modal').slideDown();
 });

 $('.close').on('click', function() {
  $('.modal').slideUp();
 });

 $('.close').on('click', function() {
  $('.overlay').fadeOut();
 });

});