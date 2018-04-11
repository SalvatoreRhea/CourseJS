$(document).ready(function() {
 $('.main_btna, .main_btn').on('click', function() {
  $('.overlay').fadeIn();
  $('.modal').slideDown();
 });

 $('.close').on('click', function() {
  $('.modal').slideUp();
  $('.overlay').fadeOut();
 });


$('a[href ^= "#sheldure"]').on('click', function() {
 $('.overlay').fadeIn();
  $('.modal').slideDown();
});



 


});